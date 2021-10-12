const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const provincia = document.getElementById('provincia');
const email = document.getElementById('email');
const password = document.getElementById('text');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const nombreValue = nombre.value.trim();
	const provinciaValue = provincia.value.trim();
    const emailValue = email.value.trim();
	const textoValue = texto.value.trim();
	
	if(nombreValue === '') {
        swal("No puede dejar el nombre en blanco");
		//setErrorFor(nombre, 'No puede dejar el nombre en blanco');
	} else {
		setSuccessFor(nombre);
	}
	if(provinciaValue === '') {
		swal("No puede dejar la provincia  en blanco");
	} else {
		setSuccessFor(provincia);
	}

	if(emailValue === '') {
        swal("No puede dejar el email en blanco");
		//setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
        swal("Ingresar un email valido");
	//	setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	
	/* if(textoValue === '') {
		setErrorFor(texto, 'Password no debe ingresar en blanco.');
	} else {
		setSuccessFor(texto);
	} */
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}