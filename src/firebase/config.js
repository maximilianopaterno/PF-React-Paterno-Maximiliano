// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIyNaH_81huoTsyWeHehg38zPVs9qH1HM",
  authDomain: "acaramelados-e4172.firebaseapp.com",
  projectId: "acaramelados-e4172",
  storageBucket: "acaramelados-e4172.appspot.com",
  messagingSenderId: "704767119138",
  appId: "1:704767119138:web:a5256464ff8dc3839c5f7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);