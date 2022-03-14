// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaYDWdCmp11kV2rcMYMq3zPv1KC6TpXe8",
  authDomain: "twitter-79c1c.firebaseapp.com",
  projectId: "twitter-79c1c",
  storageBucket: "twitter-79c1c.appspot.com",
  messagingSenderId: "816251227393",
  appId: "1:816251227393:web:66aed1f966f54d69121f00",
  measurementId: "G-442RL17ZSY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
// export default getFirestore();
