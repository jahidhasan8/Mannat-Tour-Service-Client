// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn_HMRZjdijpDCZBJK7G0UZeMo-nWQwwU",
  authDomain: "mannat-tour-service.firebaseapp.com",
  projectId: "mannat-tour-service",
  storageBucket: "mannat-tour-service.appspot.com",
  messagingSenderId: "773188042645",
  appId: "1:773188042645:web:ec7c7a2a2946167f53409c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app