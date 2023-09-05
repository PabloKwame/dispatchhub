

/**
 * @description AuthDataType
 * @type {AuthDataType}
 * @example
 * const [state, dispatch] = useReducer(AuthReducers, AuthInitialData); // AuthInitialData is the initial data for the AuthReducer
 */

export type CredentialsType = {
  id: string;
  username: string;
  phoneNumber: string;
  password: string;
  token: string;
};


export type AuthDataType = {
	username: string;
	phoneNumber: string;
	password: string;
	credentials: CredentialsType| null;
	isLoading: boolean;
	isLoginError: boolean;
	isProfileUpdateSuccess: boolean;
	uploadError: boolean;
	profileImage: File | null;
	noFile: boolean;
	isFileLoading: boolean;
	isCompressing: boolean;
	isFieldLoading: boolean;
	isFieldSuccess: boolean;
	isFieldError: boolean;
};

/**
 * @description AuthActionType
 * @type {AuthActionType}
 */
export enum AuthActionType {
	username = "USERNAME",
	phoneNumber = "PHONE_NUMBER",
	password = "PASSWORD",
	credentials = "CREDENTIALS",
	isLoading = "ISLOADING",
	isLoginError = "ISLOGINERROR",
	isProfileUpdateSuccess = "ISPROFILEUPDATESUCCESS",
	uploadError = "UPLOADERROR",
	profileImage = "PROFILEIMAGE",
	noFile = "NOFILE",
	isFileLoading = "FILEISLOADING",
	isCompressing = "ISCOMPRESSING",
	isFieldLoading = "ISFIELDLOADING",
	isFieldSuccess = "ISFIELDSUCCESS",
	isFieldError = "ISFIELDERROR",
}

/**
 * @description AuthPayload
 * @type {AuthPayload}
 * @example
 * const [state, dispatch] = useReducer(AuthReducers, AuthInitialData); // AuthInitialData is the initial data for the AuthReducer
 */
export type AuthPayload = {
	[AuthActionType.username]: string;
	[AuthActionType.phoneNumber]: string;
	[AuthActionType.password]: string;
	[AuthActionType.credentials]:  null;
	[AuthActionType.isLoading]: boolean;
	[AuthActionType.isLoginError]: boolean;
	[AuthActionType.isProfileUpdateSuccess]: boolean;
	[AuthActionType.uploadError]: boolean;
	[AuthActionType.profileImage]: File | null;
	[AuthActionType.noFile]: boolean;
	[AuthActionType.isFileLoading]: boolean;
	[AuthActionType.isCompressing]: boolean;
	[AuthActionType.isFieldLoading]: boolean;
	[AuthActionType.isFieldSuccess]: boolean;
	[AuthActionType.isFieldError]: boolean;
};

/**
 * @description ActionMap
 * @type {ActionMap}
 * @example
 * type AuthPayload = {
 *  [AuthActionType.USERNAME]: string;
 * [AuthActionType.PHONE_NUMBER]: string;
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
 * @description AuthActions
 * @type {AuthActions}
 * @example
 * const [state, dispatch] = useReducer(AuthReducers, AuthInitialData); // AuthInitialData is the initial data for the AuthReducer
 * dispatch({
 *   type: AuthActionType.username,
 *  payload: "John Doe",
 * });
 */
export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

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
 * @description Initial data for the AuthReducer
 * @type {AuthDataType}
 */
export const authInitialData: AuthDataType = {
	username: "",
	phoneNumber: "",
	password: "",
	credentials: JSON.parse(localStorage.getItem("credentials") as string)  || null,
	isLoading: false,
	isLoginError: false,
	isProfileUpdateSuccess: false,
	uploadError: false,
	profileImage: null,
	noFile: false,
	isFileLoading: false,
	isCompressing: false,
	isFieldLoading: false,
	isFieldSuccess: false,
	isFieldError: false,
};
