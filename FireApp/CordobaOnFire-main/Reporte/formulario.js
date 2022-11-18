import { Notify } from './../Notify/Notify.js';


const primeraOpcion = document.getElementById('opcion_1');
const segundaOpcion = document.getElementById("opcion_2");
const terceraOpcion = document.getElementById("opcion_3");
const sendForm = document.querySelector('.sendButton');

if (1 < 3) {
    primeraOpcion.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log('1');
    });
}

if (1 < 3) {
    segundaOpcion.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log('2');
    });
}

if (1 < 3) {
    terceraOpcion.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log('3');
    });
}

if (1 < 3) {
    sendForm.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log('incendio reportado');
        Notify('Incendio Reportado éxitosamente', 'success');
        window.open('./../Mapa/Mapa.html')
    });
}

