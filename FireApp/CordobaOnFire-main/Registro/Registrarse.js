
import './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './firebase.js';
// import './../inicio.js'



const mail = document.getElementById("correo")
const pass = document.getElementById("password");
// const name = document.getElementById("nombre");

const button = document.querySelector(".button");

button.addEventListener("click", async(e)=>{
    e.preventDefault();
    const correo = mail.value;
    const cont = pass.value;

    try{
    const credencial = await createUserWithEmailAndPassword(auth, correo, cont);
    alert("Se ha registrado exitosamente");
    window.open("./../Mapa/Mapa.html");}
    // window.close()
    catch (error){
        if (error.code === 'auth/invalid-email'){
            alert("Formato de email inválido detectado")
        }
        else if (error.code === 'auth/weak-password'){
            alert("Contraseña débil, debe contener al menos 6 carácteres")
        }
        else if (error.code === 'auth/email-already-in-use'){
            alert( "Email ya existente")
        }
        else if (error.code){
            alert("Ocurrió un error, intente de nuevo más tarde")
        }
    }
    
})