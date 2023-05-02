
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAA8FWTiuS-xsRDxDPNX7MpbBVLIg8-eL8",
  authDomain: "movie-milestone3.firebaseapp.com",
  projectId: "movie-milestone3",
  storageBucket: "movie-milestone3.appspot.com",
  messagingSenderId: "191089722366",
  appId: "1:191089722366:web:5ae6822fcf6c9870d1b6af",
  measurementId: "G-3041THD9P3"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth= getAuth(app);