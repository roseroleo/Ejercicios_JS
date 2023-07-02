/*
//Ejercicio 1
var rpta = prompt("Como esta el dia de hoy? ", "soleado, nublado, lloviendo");
alert("El dia de hoy esta " + rpta);

//Ejercicio 2
const PI = 3.1416
var radio = prompt("Escriba el radio del circulo");
let area = PI*radio**2;
let perimetro = 2*PI*radio;
alert(`El area es ${area} 
El perimetro es ${perimetro}`);

//Ejercicio 3
var edad = prompt("Escribe tu edad ");
if (edad >= 18) {
    alert ("Eres un adulto")
} else {
    alert("Eres menor de edad")
}

//Ejercicio 4
var sn = prompt("Respuesta S/N ", "S");
if (sn.toUpperCase()=="S" || sn.toLowerCase()=="n") {
    console.log("CORRECTO "+sn.toUpperCase())
} else {
    console.log("INCORRECTO "+sn.toLowerCase())
}
*/

//Ejercicio 5
var rpta = prompt(`Escoja la operacion a realizar:
SUMA S/s
RESTA R/r
MULTIPLICACION M/m
DIVISION D/d`)
let n1 = prompt("Ingrese un numero entero ");
let n2 = prompt("Ingrese otro numero ");
var operacion = rpta.toUpperCase();

switch (operacion) {
    case "S":
        alert(`suma =${n1 + n2}`);

        break;

    default:
        alert("no coincide")
        break;
}