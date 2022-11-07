const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const contraseña = document.getElementById("contraseña");
const boton = document.getElementById("btn-enviar");

boton.addEventListener('click',(e)=>{
	const registroMail = mail.value;
	const registroCont = contraseña.value;
	e.preventDefault()
	auth
		.createUserWithEmailAndPassword(registroMail, registroCont)
		.then(userCredential => {
			console.log('listo');
		})
});










