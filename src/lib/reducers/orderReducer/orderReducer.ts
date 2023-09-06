import { OrderActionType, OrderActions, OrderDataType } from "./orderInitialData";

// Orderentication Reducer
/**
 *
 * @param state
 * @param action
 * @returns
 * @description
 * This function takes a state and an action and returns a new state.
 * The new state is determined by the action type.
 */
export const orderReducer = (state: OrderDataType, action: OrderActions) => {
  if (Object.values(OrderActionType).find((item) => item === action.type)) {
    return {
      ...state,
      [Object.keys(OrderActionType)[Object.values(OrderActionType).indexOf(action.type)]]: action.payload,
    };
  } else {
    throw new Error(`Unknwon action type: ${action.type}`);
  }
};
