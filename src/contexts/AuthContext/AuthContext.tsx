import React from "react";
import { User, UserCredential } from "firebase/auth";

import { BigSpinner } from "../../components/Spinner";
import { useFirebaseAuth } from "../../hooks";

export interface Auth {
  currentUser: null | User;
  signup: null | ((email: string, password: string) => Promise<UserCredential>);
  login: null | ((email: string, password: string) => Promise<UserCredential>);
  logout: null | (() => Promise<void>);
  resetPassword: null | ((email: string) => Promise<void>);
  isLoadingUser: boolean;
}

const AuthContext = React.createContext<Auth>({
  currentUser: null,
  signup: null,
  login: null,
  logout: null,
  resetPassword: null,
  isLoadingUser: true,
});

export function AuthProvider({ children }: { children: React.ReactChild }) {
  const firebaseAuth = useFirebaseAuth();
  return (
    <AuthContext.Provider value={{ ...firebaseAuth }}>
      {firebaseAuth.isLoadingUser ? <BigSpinner /> : children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
