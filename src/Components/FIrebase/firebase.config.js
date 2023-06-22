// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};




// const firebaseConfig = {
//   apiKey: "AIzaSyBer5_blax0C7p4Tnpqmz4EWVfLOefflG0",
//   authDomain: "deshi-khabar-api.firebaseapp.com",
//   projectId: "deshi-khabar-api",
//   storageBucket: "deshi-khabar-api.appspot.com",
//   messagingSenderId: "901830345551",
//   appId: "1:901830345551:web:6161e43fe28520d9ad3b3a"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app