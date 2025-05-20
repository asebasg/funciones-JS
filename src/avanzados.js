/**
 * Ejercicios avanzados
 */

// 1. Callback
const procesar = (array, callback) => array.map(callback);

// 2. Ámbito y cierre
function crearSaludador(saludoBase) {
  return function (nombre) {
    return `${saludoBase}, ${nombre}!`;
  };
}
const saludarHola = crearSaludador("Hola");
const saludarBuenosDias = crearSaludador("Buenos días");

// 3. IIFE con parámetros
const resultado = (function (a, b) {
  return a + b;
})(3, 5);

// 4. Funcion como metodo dinamico
const persona = {
  nombre: "Ana",
  presentarse() {
    return `Mi nombre es ${this.nombre}`;
  },
};

// 5. Rest parameters y reduce
function promedio(...prom) {
  if (prom.lenght === 0) {
    return NaN;
  } else {
    return prom.reduce((total, prom) => total + prom, 0) / prom.length;
  }
}

let prom = promedio(5, 10, 20);

// 6. Combinacion de funciones
const componer = (f, g) => (x) => g(f(x));

const duplicar = (x) => x * 2;
const sumarDiez = (x) => x + 10;

const combinada = componer(duplicar, sumarDiez);

// Llamar a las funciones
console.log(procesar([42, 22, 94], (num) => num * 2));
console.log(saludarHola("Juan"));
console.log(saludarHola("María"));
console.log(saludarBuenosDias("Luis"));
console.log(resultado);
console.log(persona.presentarse());
console.log(prom);
console.log(combinada(5));
