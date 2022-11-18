

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './Registro/firebase.js';

onAuthStateChanged(auth, async(user)=>{
    console.log(user)
});
const lgout = document.querySelector('.container');

lgout.addEventListener("click", async ()=> {
    await signOut(auth);
    console.log("user sign out")

});