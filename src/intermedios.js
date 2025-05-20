/**
 * Ejercicios intermedios
 */

// 1. Suma de un array
function sumarArray(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
  //total es el acumulador
  //el valor inicial del acumulador es cero (0)
}

let resultado = sumarArray(1, 2, 3);

// 2. Rest parameters
function devolverProducto(...numero) {
  return numero.reduce((total, num) => total * num, 1); //recibo el argumento de numeros, y llamo a un metodo (reduce)
  //dentro de reduce, pongo los controladores del array, total es el acumulador y empieza en cero
  //num es el elemento actual del array en cada iteraccion
}
let producto = devolverProducto(3, 4, 5);

// 3. Cierre (closure)
function crearContador() {
  let contador = 0; // variable privada
  return function () {
    //hago de un return una funcion (closure)
    //para que cada vez que se llame y se incremente su valor
    contador++; // incrementa el contador
    return contador; // devuelve el valor actualizado
  };
}
const contador = crearContador();

// 4. Metodo en objeto
const calculadora = {
  suma: function (a, b) {
    console.log(a + b);
  },
  resta: function (a, b) {
    console.log(a + b);
  },
};

// 5. Factorial recursivo
function factorial(num) {
  if (num < 0) {
    return false; // No existe factorial de negativos
  }
  if (num === 0 || num === 1) {
    return 1; // Caso base
  }
  return num * factorial(num - 1); // multiplico el argumento de num por el parametro de num resutado en uno
}

// 6. Filtrar mayores
const numeros = [
  3, 14, 7, 1, 16, 12, 8, 19, 5, 11, 4, 10, 17, 6, 2, 15, 13, 18, 9, 20, 7, 3,
  14, 6, 11, 1, 8, 17, 12, 19, 10, 4, 13, 5, 2, 9, 16, 15, 18, 20, 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 9, 6, 3, 12, 15,
  18, 7, 2, 10, 13, 5, 8, 11, 16, 1, 4, 14, 17, 19, 20, 4, 8, 12, 16, 20, 2, 6,
  10, 14, 18, 1, 5, 9, 13, 17, 3, 7, 11, 15, 19, 20, 19, 18, 17, 16, 15, 14, 13,
  12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 1,
  3, 5, 7, 9, 11, 13, 15, 17, 19, 5, 10, 15, 20, 4, 8, 12, 16, 1, 6,
];
const numeros_dos_digitos = numeros.filter((numeros) => numeros >= 10);

// 7. Parametros por defecto avanzado
function multiplicar(a, b) {
  return a * b;
}
const area = multiplicar(12.333, 7);

// Llamar a las funciones
console.log(resultado);
console.log(producto);
console.log(contador());
console.log(contador());
console.log(contador());
calculadora.suma(3, 3);
calculadora.resta(3, 2);
console.log(factorial(4));
console.log(numeros_dos_digitos);
console.log(area);
