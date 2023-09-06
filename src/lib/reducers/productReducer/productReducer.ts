import { ProductActionType, ProductActions, ProductDataType } from "./productInitialData";

// Productentication Reducer
/**
 *
 * @param state
 * @param action
 * @returns
 * @description
 * This function takes a state and an action and returns a new state.
 * The new state is determined by the action type.
 */
export const productReducer = (state: ProductDataType, action: ProductActions) => {
  if (Object.values(ProductActionType).find((item) => item === action.type)) {
    return {
      ...state,
      [Object.keys(ProductActionType)[Object.values(ProductActionType).indexOf(action.type)]]: action.payload,
    };
  } else {
    throw new Error(`Unknwon action type: ${action.type}`);
  }
};
