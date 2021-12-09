import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/index";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;