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

/*Ejercicio 5
5. Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. 
var rpta = prompt(`Escoja la operacion a realizar:
S = SUMA
R = RESTA          
M = MULTIPLICACION  
D = DIVISION`)
var n1 = parseInt(prompt("Ingrese un numero entero "));
var n2 = parseInt(prompt("Ingrese otro numero "));
var operacion = rpta.toUpperCase();

switch (operacion) {
    case "S":
        var op = n1 + n2;
        alert(op);
        break;
    case "R":
        var op = n1 - n2;
        alert(op);
        break;
    case "M":
        var op = n1 * n2;
        alert(op);
        break;
    case "D":
        var op = n1 / n2;
        alert(op);
        break;
    default:
        alert("Error al ingresar los datos");
        break;
}
*/
/*
6. Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.
var n = prompt("Ingrese un numero entero ");
if (n == 0){
    alert("El numero no es par ni impar")
}else if (n % 2 != 0) {
    alert("El numero es impar")
} else {
    alert("El numero es par")
}
*/

/*
7. Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.
var limite = parseInt(prompt("Ingrese un valor limite"));
let suma = 0;
do {
    suma = suma + parseInt(prompt("Ingrese un numero "));
    alert("Suma = " + suma);
} while (suma <= limite);
*/

/*
8. Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
var n = 0; cont = 0, max = 0, suma = 0, condition = 0;
n = parseInt(prompt("Ingrese un numero entero o Cero '0' para Salir "));
var min = n;
while (n != 0){
    if (n != 0) {
        if (n > max) {
            max = n;
        }
        if (n < min) {
            console.log("NUmero = " + n)
            min = n;
        }
        suma += n;
        cont++;
    }
    n = parseInt(prompt("Ingrese un numero entero o Cero '0' para Salir "));
}
console.log("minimo = " + min);
console.log("maximo = " + max);
console.log("suma = " + suma);
console.log("promedio = " + suma / (cont));
*/

/*
9. Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring(). 
var frase = prompt("Escriba una frase");
let nueva = "";
let arr = frase.split('');
for (let i = 0; i < frase.length; i++) {
    nueva = nueva + frase[i] + " ";
}
console.log(nueva)
*/

/*
10. Escribir una función flecha que reciba una palabra y la devuelva al revés.  
*/

var frase = prompt("Escriba una palabra");
long = frase.length;
frase.forEach(letra => {
    
});
let func = (palabra) => a+blur;

/*
11. Escribir una función que reciba un String y devuelva la palabra más larga.  
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript” 
12. Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
dato.  
13. Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.  
14. Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario 
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.  
15. Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.  
16. Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla.  
17. Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado 
18. A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]: 
a) Determinar cual de los dos elementos de texto es mayor 
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false 
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos 
19. Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20. 
*/