import { useContext } from "react";

import AuthContext, { Auth } from "../contexts/AuthContext";

export function useAuth(): Auth {
  return useContext(AuthContext);
}
