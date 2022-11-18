import './../Registro/firebase.js';

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './../Registro/firebase.js';
import { Notify } from './../Notify/Notify.js'

onAuthStateChanged(auth, async(user)=>{
    Notify('Bienvenido ' + user.email, 'success');
    console.log(user)
});

const lgout = document.querySelector('.LgOut');

lgout.addEventListener("click", async ()=> {
    await signOut(auth);
    Notify('Cierre de Sesión Exitoso', 'success')

});