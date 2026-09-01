
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-5ea90.firebaseapp.com",
  projectId: "interviewiq-5ea90",
  storageBucket: "interviewiq-5ea90.firebasestorage.app",
  messagingSenderId: "513094277774",
  appId: "1:513094277774:web:4c6595e964bb173ae687df"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}