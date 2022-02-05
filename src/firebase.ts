import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(CONFIG);

const auth = getAuth(app);
const firestore = getFirestore(app);
const functions = getFunctions(app);
const storage = getStorage(app);

if (process.env.REACT_APP_FIREBASE_EMULATOR === "ON") {
  // Auth emulator
  connectAuthEmulator(auth, "http://localhost:9099");
  // Firestore emulator
  connectFirestoreEmulator(firestore, "localhost", 8080);
  // Functions emulator
  connectFunctionsEmulator(functions, "localhost", 5001);
  // Storage emulator
  connectStorageEmulator(storage, "localhost", 9199);
}

export default app;
export { auth, firestore, functions, storage };
