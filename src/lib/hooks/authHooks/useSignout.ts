import { useNavigate } from "react-router-dom";

export const useSignout = () => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return {
    signOut,
  };
};
