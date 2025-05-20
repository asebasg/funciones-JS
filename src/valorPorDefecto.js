/**
 * Escribe una función que reciba un nombre y un saludo opcional (por defecto: "Hola").
 */

function saludo(nombre) {
    if (nombre === undefined) {
        return `¡Hola!`
    } else {
        return `¡Hola ${nombre}!`
    }
}

console.log(saludo());