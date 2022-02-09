import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  User,
  UserCredential,
} from "firebase/auth";

import { auth } from "../firebase";
import { Auth } from "../contexts/AuthContext";

export function useFirebaseAuth(): Auth {
  const [currentUser, setCurrentUser] = useState<null | User>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  function signup(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoadingUser(false);
    });
    return unsubscribe;
  }, []);

  return {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    isLoadingUser,
  };
}
