function calcularIMC(elEvento){
    elEvento.preventDefault()

var nombre = document.querySelector("#inputPrimerNombre").value;
var peso = document.querySelector("#inputPeso").value;
var altura = document.querySelector("#inputAltura").value;


/* Section formula */
var formula = peso/(altura*altura);


/* Section programacion */
if(formula < 18.5){
    cajaMensaje.innerHTML = '<p class="mensaje"> '+ nombre +' tienes un bajo peso</p>'
}else if(formula > 18.5 & formula < 24.9){
    cajaMensaje.innerHTML = '<p class="mensaje"> '+ nombre +' tienes un peso normal</p>'
}else if(formula > 25 & formula < 29.9){
    cajaMensaje.innerHTML = '<p class="mensaje"> '+ nombre +' tienes sobrepeso</p>'
}else if(formula >= 30){
    cajaMensaje.innerHTML = '<p class="mensaje"> '+ nombre +' tienes obesidad</p>'
}


}
var boton = document.querySelector("#boton");
boton.addEventListener("submit", calcularIMC);
