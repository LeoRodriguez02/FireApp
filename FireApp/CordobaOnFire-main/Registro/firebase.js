// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries 
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsuo2l3qmNGDap-BpXoDj-t6NwhGETtN8",
  authDomain: "fireapp-95dbe.firebaseapp.com",
  projectId: "fireapp-95dbe",
  storageBucket: "fireapp-95dbe.appspot.com",
  messagingSenderId: "84833277177",
  appId: "1:84833277177:web:aee3d5998f38a04626fe28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);