import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { orderReducer, orderInitialData, OrderDataType, OrderActions, OrderActionType } from "../lib/reducers/orderReducer";
import { useQuery } from "@apollo/client";
import { GET_ALL_ORDERS } from "../lib/graphqlQueries/OrderQueries";


// TODO: Update profile

interface OrderProviderProps {
  children?: ReactNode;
}

type OrderContextType = {

  orderState: OrderDataType
  orderDispatch: React.Dispatch<OrderActions>
};
const OrderContext = createContext<OrderContextType | null | string>("");

export const useOrderProvider = () => {
  return useContext(OrderContext) as OrderContextType;
};

const OrderProvider = ({ children }: OrderProviderProps) => {

  const [state, dispatch] = useReducer(orderReducer, orderInitialData);


  const { data: ordersData } = useQuery(GET_ALL_ORDERS)
  const orderList = ordersData?.getAllCustomerOrders?.data
  console.log(orderList)

  useEffect(() => {
    if (orderList) {
      dispatch({ type: OrderActionType.orderList, payload: orderList })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderList])

  return (
    <>
      <OrderContext.Provider value={{
        orderState: state,
        orderDispatch: dispatch,
      }}>{children}</OrderContext.Provider>
    </>
  );
};

export default OrderProvider;
