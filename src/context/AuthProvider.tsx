import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { authReducer, authInitialData, AuthDataType, AuthActions, AuthActionType } from "../lib/reducers/authReducer";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../lib/graphqlQueries/authQueries";

// TODO: Update profile

interface AuthProviderProps {
  children?: ReactNode;
}

type AuthContextType = {

  authState: AuthDataType
  authDispatch: React.Dispatch<AuthActions>
};
const AuthContext = createContext<AuthContextType | null | string>("");

export const useAuthProvider = () => {
  return useContext(AuthContext) as AuthContextType;
};

const AuthProvider = ({ children }: AuthProviderProps) => {

  const [state, dispatch] = useReducer(authReducer, authInitialData);


  const { data: userData } = useQuery(GET_CURRENT_USER)
  const credentialsDetails = userData?.getCurrentAdministrator?.data
  console.log(userData)

  useEffect(() => {
    if (credentialsDetails) {
      dispatch({ type: AuthActionType.credentials, payload: { ...credentialsDetails, token: state.credentials?.token } })
    }
  }, [])

  return (
    <>
      <AuthContext.Provider value={{
        authState: state,
        authDispatch: dispatch,
      }}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
