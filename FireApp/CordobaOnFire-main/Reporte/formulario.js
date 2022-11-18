const primeraOpcion = document.getElementById('opcion_1');
const segundaOpcion = document.getElementById("opcion_2");
const terceraOpcion = document.getElementById("opcion_3");
const sendForm = document.querySelector('.enviar');

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
        alert('Reportado exitosamente');
        window.open('https://youtube.com')
    });
}

