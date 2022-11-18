import './../Registro/firebase.js'
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './../Registro/firebase.js';

const buttonLogin = document.querySelector('.buttonLogin');
buttonLogin.addEventListener('click', async(e)=>{
    e.preventDefault();
    const emailUser = document.querySelector('.emailUser').value;
    const passUser = document.querySelector('.passUser').value;
    try{
    const crdntls = await signInWithEmailAndPassword(auth, emailUser, passUser);
    console.log(crdntls);
    alert('Inicio de Sesión exitóso');
    window.open('./../Mapa/Mapa.html')
    }
    catch(error){
        if(error.code === 'auth/user-not-found'){
            alert('Usuario no Existente')
        }
        else if(error.code === 'auth/wrong-password'){
            alert('Contraseña Incorrecta')
        }
        else{
            alert('Ha ocurrido un error, intente de nuevo más tarde')
        }
        
    }
    
})