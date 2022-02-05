import React from "react";
import { User, UserCredential } from "firebase/auth";

import { useFirebaseAuth } from "../../hooks";

export interface Auth {
  currentUser: null | User;
  signup: null | ((email: string, password: string) => Promise<UserCredential>);
}

const AuthContext = React.createContext<Auth>({
  currentUser: null,
  signup: null,
});

export function AuthProvider({ children }: { children: React.ReactChild }) {
  const { currentUser, signup } = useFirebaseAuth();
  return (
    <AuthContext.Provider value={{ currentUser, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
