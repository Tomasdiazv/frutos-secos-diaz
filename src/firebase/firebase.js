import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCzp9M2flHSjyuMcb4mZg8fCbXjx3h4-E0",
  authDomain: "reactdesafioscoder.firebaseapp.com",
  projectId: "reactdesafioscoder",
  storageBucket: "reactdesafioscoder.appspot.com",
  messagingSenderId: "793974083052",
  appId: "1:793974083052:web:ef8df665311abf4db2c4c9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);