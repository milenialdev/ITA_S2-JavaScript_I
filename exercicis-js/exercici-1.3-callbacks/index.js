/**Nivell 1
 * Exercici 1
 * Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.
 */

const processar = (numero, callback) => {
    callback(numero);
}

const duplicarNumero = (numero) => {
    console.log(`El número duplicat és: ${numero * 2}`);
}

processar(5, duplicarNumero);

/**
 * Exercici 2
 * Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.
 */
const calculadora = (num1, num2, callback) =>{
    callback(num1, num2);
}

const suma = (num1, num2) => {
    console.log(`La suma és: ${num1 + num2}`);
}

calculadora(10, 20, suma);

/**Nivell 2
 * Exercici 3
 * Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.
 */
const esperarISaludar = (nom, callback) => {
    setTimeout(() => {
        callback(nom);
    }, 2000);
}
const saludar = (nom) => {
    console.log(`Hola, ${nom}!`);
}
esperarISaludar('Joan', saludar);

/**Exercici 4
 * Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array
 */

const processarElements = (array, callback) => {
    array.forEach(element => {
        callback(element);
    });
}
const mostrarElement = (element) => {
    console.log(`Element: ${element}`);
}
processarElements([1, 2, 3, 4, 5], mostrarElement);

/**Nivell 3
 * Exercici 5
 * Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.
 */

const processarCadena = (cadena, callback) => {
    const cadenaTransformada = cadena.toUpperCase();
    callback(cadenaTransformada);
}
const mostrarCadena = (cadena) => {
    console.log(`Cadena transformada: ${cadena}`);
}
processarCadena('hola món', mostrarCadena);
