
import './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './firebase.js';
// import './../inicio.js'
import './../Notify/Notify.js';
import { Notify } from './../Notify/Notify.js';


const mail = document.getElementById("correo");
const pass = document.getElementById("password");
// const name = document.getElementById("nombre");

const button = document.querySelector(".button");

button.addEventListener("click", async(e)=>{
    e.preventDefault();
    const correo = mail.value;
    const cont = pass.value;

    try{
    const credencial = await createUserWithEmailAndPassword(auth, correo, cont);
    
    Notify('welcome ' + credencial.user.email, 'success');
    window.open("./../Mapa/Mapa.html");
    window.close();
    }
    catch (error){
        if (error.code === 'auth/invalid-email'){
            Notify('Formato de email inválido detectado', 'error')
        }
        else if (error.code === 'auth/weak-password'){
            Notify('Contraseña débil, debe contener al menos 6 carácteres', 'error')
        }
        else if (error.code === 'auth/email-already-in-use'){
            Notify('Email ya existente', 'error')
        }
        else if (error.code){
            Notify('Ocurrió un error, intente de nuevo más tarde', 'error')
        }
    }
    
})