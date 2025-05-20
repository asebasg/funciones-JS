/*Filtrar mayores*/
const numeros = [3, 14, 7, 1, 16, 12, 8, 19, 5, 11, 4, 10, 17, 6, 2, 15, 13, 18, 9, 20,7, 3, 14, 6, 11, 1, 8, 17, 12, 19, 10, 4, 13, 5, 2, 9, 16, 15, 18, 20,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,9, 6, 3, 12, 15, 18, 7, 2, 10, 13, 5, 8, 11, 16, 1, 4, 14, 17, 19, 20,4, 8, 12, 16, 20, 2, 6, 10, 14, 18, 1, 5, 9, 13, 17, 3, 7, 11, 15, 19,20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19,5, 10, 15, 20, 4, 8, 12, 16, 1, 6];
const numeros_dos_digitos = numeros.filter(numeros => numeros >= 10);
console.log(numeros_dos_digitos);

/*Parámetros por defecto avanzado*/
function multiplicar(a,b) {
    return a * b;
}
const area = multiplicar(12.333, 7)
console.log(area)

/*Callback*/
const procesar = (array, callback) => array.map(callback);

console.log(procesar([42, 22, 94], num => num * 2));

/*Ambito y cierre*/ 
function crearSaludador(saludoBase) {
  return function(nombre) {
    return `${saludoBase}, ${nombre}!`;
  };
}

const saludarHola = crearSaludador("Hola");
const saludarBuenosDias = crearSaludador("Buenos días");

console.log(saludarHola("Juan"));         
console.log(saludarHola("María"));        
console.log(saludarBuenosDias("Luis"));   

/*IIFE con parámetros*/
const resultado = (function(a, b) {
  return a + b;
})(3, 5);

console.log(resultado);

/*Función como método dinámico */
const persona = {
  nombre: "Ana",
  presentarse() {
    return `Mi nombre es ${this.nombre}`;
  }
};

console.log(persona.presentarse());

/*combinacion de funciones*/
const componer = (f, g) => x => g(f(x));

const duplicar = x => x * 2;
const sumarDiez = x => x + 10;

const combinada = componer(duplicar, sumarDiez);

console.log(combinada(5));


