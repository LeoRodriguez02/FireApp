import './../Registro/firebase.js'
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './../Registro/firebase.js';
import { Notify } from './../Notify/Notify.js';

const buttonLogin = document.querySelector('.buttonLogin');
buttonLogin.addEventListener('click', async(e)=>{
    e.preventDefault();
    const emailUser = document.querySelector('.emailUser').value;
    const passUser = document.querySelector('.passUser').value;
    try{
    const crdntls = await signInWithEmailAndPassword(auth, emailUser, passUser);
    console.log(crdntls);
    Notify('Inicio de Sesión exitóso', 'success');    
    window.open('./../Mapa/Mapa.html');
    // window.close()
    }
    catch(error){
        if(error.code === 'auth/user-not-found'){
            Notify('Usuario no Existente', 'error')
        }
        else if(error.code === 'auth/wrong-password'){
            Notify('Contraseña Incorrecta', 'error')
        }
        else{
            Notify('Ha ocurrido un error, intente de nuevo más tarde', 'error')
        }
        
    }
    
})