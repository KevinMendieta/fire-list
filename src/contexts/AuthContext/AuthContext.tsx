import React from "react";
import { User, UserCredential } from "firebase/auth";

import { BigSpinner } from "../../components/Spinner";
import { useFirebaseAuth } from "../../hooks";

export interface Auth {
  currentUser: null | User;
  signup: null | ((email: string, password: string) => Promise<UserCredential>);
  login: null | ((email: string, password: string) => Promise<UserCredential>);
  isLoadingUser: boolean;
}

const AuthContext = React.createContext<Auth>({
  currentUser: null,
  signup: null,
  login: null,
  isLoadingUser: true,
});

export function AuthProvider({ children }: { children: React.ReactChild }) {
  const { currentUser, signup, login, isLoadingUser } = useFirebaseAuth();
  return (
    <AuthContext.Provider value={{ currentUser, signup, login, isLoadingUser }}>
      {isLoadingUser ? <BigSpinner /> : children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
