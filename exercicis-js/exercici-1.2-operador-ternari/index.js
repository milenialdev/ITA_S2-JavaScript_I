/** Nivell 1
 * Exercici 1
 * Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.
 */

const potConduir = (number) => {
    const edat = number; 
    return edat >= 18 ? console.log('Pots conduir') : console.log('No pots conduir');
}

potConduir(20);

/**Exercici 2
 * Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'. */

const greaterNumber = (num1, num2) => {
    return num1 > num2 ? console.log(`${num1} és més gran`) : console.log(`${num2} és més gran`);  
}

greaterNumber(10, 20);

/** Nivell 2
 * Exercici 3
 * Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.
 * Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.
 */
const trobarMaxim = (a, b, c) =>
    a > b
        ? (a > c ? a : c)
        : (b > c ? b : c);

console.log(`${trobarMaxim(1, 2, 3)} és el major`);

/**Nivell 3
 * Exercici 4
 * Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.
 */
const parOImpar = (array) => {
    array.forEach(num => {
        const result = num % 2 === 0 ? `${num} és parell` : `${num} és imparell`;
        console.log(result);
    })
}

parOImpar([1, 2, 3, 4, 5]);
