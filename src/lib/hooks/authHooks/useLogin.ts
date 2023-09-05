import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validateData } from "../../reducers/validators/_helper";
import { LoginFormSchemaType, loginFormSchema } from "../../reducers/validators/loginFormValidator";
import { AuthActionType } from "../../reducers/authReducer";
import { useAuthProvider } from "../../../context/AuthProvider";
import { useMutation } from "@apollo/client";
import { SIGN_IN_MUTATION } from "../../graphqlQueries/authQueries";

export const useLogin = () => {
  const navigate = useNavigate();
  const { authDispatch, authState } = useAuthProvider();

  useEffect(() => {
    if (localStorage.getItem("credentials")) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [loginAdministrator, { data: LoginData }] = useMutation(SIGN_IN_MUTATION);
  const credentialsDetails = LoginData?.loginAdministrator;

  useEffect(() => {
    if (credentialsDetails?.success) {
      authDispatch({
        type: AuthActionType.isLoading,
        payload: false,
      });
      authDispatch({
        type: AuthActionType.credentials,
        payload: credentialsDetails,
      });
      localStorage.setItem(
        "credentials",
        JSON.stringify({
          token: credentialsDetails.data.jwt,
          phoneNumber: credentialsDetails.data.phoneNumber,
        })
      );
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [credentialsDetails?.success]);

  const submitData = async (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault();
      authDispatch({
        type: AuthActionType.isLoading,
        payload: true,
      });

      const validationResults = await validateData<LoginFormSchemaType>(loginFormSchema)({
        phoneNumber: authState.phoneNumber,
        password: authState.password,
      });

      if (validationResults === true) {
        console.log("validationResults is true");
      } else {
        // TODO: add error to error state and display it in the UI
        console.log("validationResults is false");
        return;
      }

      loginAdministrator({
        variables: {
          phoneNumber: authState.phoneNumber,
          password: authState.password,
        },
      });
    } catch (error: unknown) {
      console.log(error);
      authDispatch({
        type: AuthActionType.isLoginError,
        payload: true,
      });
      authDispatch({
        type: AuthActionType.isLoading,
        payload: false,
      });
      const timer = setTimeout(() => {
        authDispatch({
          type: AuthActionType.isLoginError,
          payload: false,
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  };
  return { submitData, authDispatch, authState };
};
