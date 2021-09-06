function calcularIMC(elEvento){
    elEvento.preventDefault()

var nombre = document.querySelector("#inputPrimerNombre").value;
var sexoMasculino = document.querySelector("#input_hombre").value;
var sexoFemenino = document.querySelector("#input_mujer").value;
var peso = document.querySelector("#inputPeso").value;
var altura = document.querySelector("#inputAltura").value;
var edad = document.querySelector("#inputEdad").value;
var sedentario = document.querySelector("#sedentario");
var moderado = document.querySelector("#moderado");
var ligero = document.querySelector("#ligero");
var intenso = document.querySelector("#intenso");
var medidaAbdominal = document.querySelector("#inputMedidaAbdominal").value;

/* Section formula */
var formula = peso/(altura*altura);


/* Section programacion */
if(formula < 18.5){
    cajaMensaje.innerHTML = '<p class="mensaje">IMC: Bajo peso</p>'
}else if(formula > 18.5 & formula < 24.9){
    cajaMensaje.innerHTML = '<p class="mensaje">IMC: Peso normal</p>'
}else if(formula > 25 & formula < 29.9){
    cajaMensaje.innerHTML = '<p class="mensaje">IMC: Sobrepeso</p>'
}else if(formula >= 30){
    cajaMensaje.innerHTML = '<p class="mensaje">IMC: Obesidad</p>'
}


}
var boton = document.querySelector("#boton");
boton.addEventListener("submit", calcularIMC);