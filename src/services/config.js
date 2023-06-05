import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPjjXiJQILlSUVaTFFs6isIEEBldfpP10",
  authDomain: "beverage--warehouse.firebaseapp.com",
  projectId: "beverage--warehouse",
  storageBucket: "beverage--warehouse.appspot.com",
  messagingSenderId: "351536033575",
  appId: "1:351536033575:web:9c9c49a7e825f01148c302"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);