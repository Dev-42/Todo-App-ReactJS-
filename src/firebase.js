// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKs0Mri4ZPAt_QXqplO2bsCUG5kO5G2Kc",
  authDomain: "todos-9ee23.firebaseapp.com",
  projectId: "todos-9ee23",
  storageBucket: "todos-9ee23.appspot.com",
  messagingSenderId: "862533614777",
  appId: "1:862533614777:web:32ea9ac030e25c29bf2f68"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)