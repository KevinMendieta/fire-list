import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
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
    isLoadingUser,
  };
}
