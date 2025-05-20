/**
 * Crea una declaración de función que determine si un número es par o impar.
 */

function esPar(num) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}

console.log(esPar(100));