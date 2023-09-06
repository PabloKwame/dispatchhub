import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { productReducer, productInitialData, ProductDataType, ProductActions, ProductActionType } from "../lib/reducers/productReducer";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../lib/graphqlQueries/productQueries";


// TODO: Update profile

interface ProductProviderProps {
  children?: ReactNode;
}

type ProductContextType = {
  productState: ProductDataType
  productDispatch: React.Dispatch<ProductActions>
};
const ProductContext = createContext<ProductContextType | null | string>("");

export const useProductProvider = () => {
  return useContext(ProductContext) as ProductContextType;
};

const ProductProvider = ({ children }: ProductProviderProps) => {

  const [state, dispatch] = useReducer(productReducer, productInitialData);


  const { data: productsData } = useQuery(GET_ALL_PRODUCTS)
  const productList = productsData?.getProducts?.data
  console.log(productList)

  useEffect(() => {
    if (productList) {
      dispatch({ type: ProductActionType.productList, payload: productList })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList])

  return (
    <>
      <ProductContext.Provider value={{
        productState: state,
        productDispatch: dispatch,
      }}>{children}</ProductContext.Provider>
    </>
  );
};

export default ProductProvider;
