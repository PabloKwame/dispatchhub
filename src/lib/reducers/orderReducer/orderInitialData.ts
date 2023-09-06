export interface CustomerOrderType {
  _id: string | null;
  orderCode: string;
  customerId: CustomerDataType;
  status: string;
  productTotalPrice: number;
  deliveryFee: string;
  branchId: string | null;
  address: string;
  location: LocationType;
  readyAt: string | null;
  completedAt: string | null;
  deliveredAt: string | null;
  cancelledAt: string | null;
  acceptedAt: string | null;
  deliveringAt: string | null;
  PaymentOption: string;
  pickup: boolean;
  paid: boolean;
  discount: number;
  packages: PackagesType[];
  otp: number;
  createdAt: string;
  updatedAt: string;
  assignedManager: ManagerDataType;
  assignedSalesPerson: SalesPersonDataType;
  comment: string;
  couponCashWorth: string;
}

export interface CustomerDataType {
  _id: string | null;
  username: string;
  phoneNumber: string;
  email: string;
  deviceToken: string[];
  enabled: boolean;
  isCivilServant: boolean;
}

export interface LocationType {
  latitude: number;
  longitude: number;
}

export interface PackagesType {
  quantity: number;
  productId: ProductType;
  extras: ProductType[];
}

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

export interface ManagerDataType {
  _id: string | null;
  username: string;
  phoneNumber: string;
  email: string;
  branchId: string | null;
  deviceToken: string[];
  enabled: boolean;
}

export interface SalesPersonDataType {
  _id: string | null;
  username: string;
  phoneNumber: string;
  email: string;
  branchId: string | null;
  deviceToken: string[];
  enabled: boolean;
}

/**
 * @description OrderDataType
 * @type {OrderDataType}
 * @example
 * const [state, dispatch] = useReducer(OrderReducers, OrderInitialData); // OrderInitialData is the initial data for the OrderReducer
 */

export type OrderDataType = {
  orderList: CustomerOrderType[] ;
};

/**
 * @description OrderActionType
 * @type {OrderActionType}
 */
export enum OrderActionType {
  orderList = "ORDER_LIST",
}

/**
 * @description OrderPayload
 * @type {OrderPayload}
 * @example
 * const [state, dispatch] = useReducer(OrderReducers, OrderInitialData); // OrderInitialData is the initial data for the OrderReducer
 */
export type OrderPayload = {
  [OrderActionType.orderList]: CustomerOrderType[] ;
};

/**
 * @description ActionMap
 * @type {ActionMap}
 * @example
 * type OrderPayload = {
 *  [OrderActionType.USERNAME]: string;
 * [OrderActionType.PHONE_NUMBER]: string;
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
 * @description OrderActions
 * @type {OrderActions}
 * @example
 * const [state, dispatch] = useReducer(OrderReducers, OrderInitialData); // OrderInitialData is the initial data for the OrderReducer
 * dispatch({
 *   type: OrderActionType.username,
 *  payload: "John Doe",
 * });
 */
export type OrderActions = ActionMap<OrderPayload>[keyof ActionMap<OrderPayload>];

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
 * @description Initial data for the OrderReducer
 * @type {OrderDataType}
 */
export const orderInitialData: OrderDataType = {
  orderList: [],
};
