

export interface ProductType {
  _id: string | null;
  productCode: string;
  productImage: string;
  name: string;
  unitPrice: number;
  width: number;
  height: number;
  family: string;
  dominantColor: string;
  imagePublicId: string;
  size: string;
  productionCategory: string;
  description: string;
  activatedBranches: string[];
  enabled: boolean;
}

/**
 * @description ProductDataType
 * @type {ProductDataType}
 * @example
 * const [state, dispatch] = useReducer(ProductReducers, ProductInitialData); // ProductInitialData is the initial data for the ProductReducer
 */

export type ProductDataType = {
  productList: ProductType[];
};

/**
 * @description ProductActionType
 * @type {ProductActionType}
 */
export enum ProductActionType {
  productList = "ORDER_LIST",
}

/**
 * @description ProductPayload
 * @type {ProductPayload}
 * @example
 * const [state, dispatch] = useReducer(ProductReducers, ProductInitialData); // ProductInitialData is the initial data for the ProductReducer
 */
export type ProductPayload = {
  [ProductActionType.productList]: ProductType[];
};

/**
 * @description ActionMap
 * @type {ActionMap}
 * @example
 * type ProductPayload = {
 *  [ProductActionType.USERNAME]: string;
 * [ProductActionType.PHONE_NUMBER]: string;
 * ...
 * }
 */
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: {
    type: Key;
    payload: M[Key];
  };
};

/**
 * @description ProductActions
 * @type {ProductActions}
 * @example
 * const [state, dispatch] = useReducer(ProductReducers, ProductInitialData); // ProductInitialData is the initial data for the ProductReducer
 * dispatch({
 *   type: ProductActionType.username,
 *  payload: "John Doe",
 * });
 */
export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

/******************************  AUTH NOTIFICATION  ******************************/

export type NotificationType = {
  transform: boolean;
  dispatch: () => void;
  isClose: true;
  hexColor: string;
  status?: "success" | "error" | "info";
  noteText: string;
}[];

/**
 * @description Initial data for the ProductReducer
 * @type {ProductDataType}
 */
export const productInitialData: ProductDataType = {
  productList: [],
};
