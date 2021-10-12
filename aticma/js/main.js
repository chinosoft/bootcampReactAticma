// Variables globales

const nombreyapellido = document.querySelector('#nombre')
const provincia = document.querySelector('#provincia')
const email = document.querySelector('#email')
const textocontacto = document.querySelector('#textcontacto')
const enviar = document.querySelector('#submit')

//Funciones

cargarEventListeners();
//chequea nombre si esta vacio o es no valido tira alerta
function cargarEventListeners() {
nombreyapellido.addEventListener("input",addNombre);
provincia.addEventListener("input",addProvincia);
email.addEventListener("input",addEmail);
textocontacto.addEventListener("input",addTextoContacto);
enviar.addEventListener("click",addEnviar);
}

//EJEMPLO

function addNombre(e) {
  console.log(e.target.value)
    if(e.target.value == ""){
      swal("Todos los campos son obligatorios!");
    }
}
function addProvincia(e) {
  if(e.target.value == ""){
    swal("Todos los campos son obligatorios!");
  }
}

function addEmail(e) {
  if(e.target.value == "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/") 
    swal("Todos los campos son obligatorios!");
  }

function addTextoContacto(e) {
  if(e.target.value == ""){
    swal("Todos los campos son obligatorios!");
  }
}
function addEnviar(e) {
  e.preventDefault();
  swal("Buen trabajo!", "Tus datos fueron enviados con exito", "success");
  console.log('diste click al boton enviar')
}
