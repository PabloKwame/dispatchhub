import { ReactNode, createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};


//FIXME: You can have a look at the how the AuthProvider has been done
export const DarkModeContext = createContext(INITIAL_STATE);

interface DarkModeContextProviderProps {
  children?: ReactNode;
}

export const DarkModeContextProvider = ({ children }: DarkModeContextProviderProps) => {
  const [state, ] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
