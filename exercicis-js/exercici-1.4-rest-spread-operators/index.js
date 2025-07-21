/**Nivell 1
 * Exercici 1
 * Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2. */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);

/**Ecercici 2
 * Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.
 */
const suma = (...numeros) => {
    return numeros.reduce((acc, num) => acc + num, 0);
}
console.log(suma(1, 2, 3, 4, 5));

/**Nivell 2
 * Exercici 3
 * Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.
 */
const objecte1 = { nom: 'Joan', edat: 30 };
const objecte2 = { ...objecte1, edat: 31 };
console.log(objecte1); 
console.log(objecte2);

/**Exercici 4
 * Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.
 */
const array = [1, 2, 3, 4, 5, 6];
const [primer, segon, ...resta] = array;
console.log(primer, segon); 
console.log(resta); 

/**Nivell 3
 * Exercici 5
 * Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array. */

const numbers = (a, b, c) => {
    console.log(`Arguments: ${a}, ${b}, ${c}`);
}
const arrayArguments = [10, 20, 30];
numbers(...arrayArguments);

/**Exercici 6
 * Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou. 
 */
const objecteA = { a: 1, b: 2 };
const objecteB = { c: 3, d: 4 };
const objecteFusionat = { ...objecteA, ...objecteB };
console.log(objecteFusionat);

