// IIFE simple
// Escribe una IIFE que imprima en consola "¡Soy una IIFE!" sin contaminar el ámbito global.

(function() {
    console.log("¡Soy una IIFE!");
})();
//--------------------------------------------------

// Ejercicios Intermedios
// Suma de un array
// Crea una expresión de función que reciba un array de números y devuelva su suma usando un bucle o reduce. Ejemplo: sumarArray([1, 2, 3]) → 6.

function sumarArray(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
    //total es el acumulador
    //el valor inicial del acumulador es cero (0)
}

 let resultado = sumarArray(1,2,3);
 console.log(resultado);

 //-------------------------------------------------

// Rest parameters
// Escribe una función que use rest parameters para aceptar cualquier número de argumentos y devuelva su producto. Ejemplo: multiplicar(2, 3, 4) → 24.

function devolverProducto(...numero) {
    return numero.reduce((total, num) => total*num, 1)//recibo el argumento de numeros, y llamo a un metodo (reduce)
    //dentro de reduce, pongo los controladores del array, total es el acumulador y empieza en cero
    //num es el elemento actual del array en cada iteraccion
}
let producto = devolverProducto(3,4,5);
console.log(producto);

//importante: cuando uso reduce, el valor inicial de total depnede
//si es multiplicacion o division, empieza en uno
//para suma o resta es cero

//-----------------------------------------------------

// Cierre (closure)
// Crea una función que devuelva otra función que incremente un contador privado cada vez que se llame. Ejemplo:

function crearContador() {
    let contador = 0; // variable privada
    return function() {//hago de un return una funcion (closure)
                    //para que cada vez que se llame y se incremente su valor
        contador++; // incrementa el contador
        return contador; // devuelve el valor actualizado
    }
}
const contador = crearContador();
console.log(contador()); 
console.log(contador()); 
console.log(contador());

//------------------------------------------------------------

// Método en objeto
// Crea un objeto calculadora con un método sumar (usando una declaración de función) y otro método restar (usando una arrow function). Ejemplo:
const calculadora = {
    suma : function(a,b){
        console.log(a+b)
    },
    resta : function(a,b){
        console.log(a+b)
    }
}
calculadora.suma(3,3);
calculadora.resta(3,2);

//---------------------------------------------------------------

// Factorial recursivo
// Escribe una expresión de función nombrada que calcule el factorial de un número. Ejemplo: factorial(5) → 120.
function factorial(num) {
    if (num < 0) {
        return false; // No existe factorial de negativos
    }
    if (num === 0 || num === 1) {
        return 1; // Caso base
    }
    return num * factorial(num - 1); // multiplico el argumento de num por el parametro de num resutado en uno
}

console.log(factorial(4)); // 24
//-------------------------------------------------------------
// Calcula el promedio de todos los números recibidos usando rest parameters y reduce
function promedio(...numeros) {
    if (numeros.length === 0) return 0; // Evita división por cero
    const suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
}

console.log(promedio(10, 20, 30)); // 20
console.log(promedio(5, 15));      // 10
console.log(promedio());           // 0
// filepath: c:\Users\juang\OneDrive\Escritorio\funciones\funciones-JS\src\juanes.js