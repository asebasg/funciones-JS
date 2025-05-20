/**
 * Ejercicios basicos
 */

// 1. Saludo simple.
function saludoSimple(nombre) {
  return `Hola, ${nombre}, ¿cómo te va?`;
}

// 2. Suma de dos numeros
function suma(a, b) {
  return a + b;
}

// 3. Arrow function para duplicar
const sumaDoble = (num) => {
  let doble = num * 2; // Aqui se multiplica el numero por dos
  return doble;
};

// 4. Par o impar
function esPar(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// 5. Valor por defecto
function saludoPorDefecto(nombre) {
  if (nombre === undefined) {
    return `¡Hola!`;
  } else {
    return `¡Hola ${nombre}!`;
  }
}

// 6. Funcion sin parametros
function mensaje() {
  return `Hola, este es un simple mensaje...`;
}

// 7. IIFE simple
(function () {
  console.log("¡Soy una IIFE!");
})();

// Aqui se llaman las funciones
console.log(saludoSimple("Sebastian")); // 1
console.log(suma(3, 5)); // 2
console.log(sumaDoble(5)); // 3
console.log(esPar(100)); // 4
console.log(saludoPorDefecto()); // 5
console.log(mensaje()); // 6
