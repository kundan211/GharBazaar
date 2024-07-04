
// export const app = initializeApp(firebaseConfig);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "mern-estate-addb0.firebaseapp.com",
//   projectId: "mern-estate-addb0",
//   storageBucket: "mern-estate-addb0.appspot.com",
//   messagingSenderId: "443629423822",
//   appId: "1:443629423822:web:9d0ee0affbbe9c6b60549f"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-addb0.firebaseapp.com',
  projectId: "mern-estate-addb0",
  storageBucket: "mern-estate-addb0.appspot.com",
  messagingSenderId: "443629423822",
  appId: "1:443629423822:web:9d0ee0affbbe9c6b60549f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);