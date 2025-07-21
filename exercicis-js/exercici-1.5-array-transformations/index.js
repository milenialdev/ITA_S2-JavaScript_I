/**Nivell 1
 * Exercici 1
 * Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número. 
 */
const numeros = [1, 2, 3, 4];
const quadrats = numeros.map(num => num * num);
console.log(quadrats);


/**Exercici 2
 * Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells. */
const numerosArray = [1, 2, 3, 4];
const numerosParells = numerosArray.filter(num => num % 2 === 0);
console.log(numerosParells);



/**Exercici 3
 * Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10. */

const numerosFind = [1, 10, 8, 11];
const majorQue10 = numerosFind.find(num => num > 10);
console.log(majorQue10);


/**Exercici 4
 * Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números. */
const numerosReduce = [13, 7, 8, 21];
const sumaTotal = numerosReduce.reduce((acc, num) => acc + num, 0);
console.log(sumaTotal);



/**Nivell 2
 * Exercici 5
 * Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
 * - Filtra els nombres majors o iguals a 10.
 * - Multiplica cada nombre filtrat per 2.
 * - Calcula la suma dels nombres filtrats i multiplicats per 2.
 * - La funció ha de retornar el resultat de la suma. */

const numerosArray2 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const resultat = numerosArray2
    .filter(num => num >= 10)
    .map(num => num * 2)
    .reduce((acc, num) => acc + num, 0);
console.log(resultat);

/**Nivell 3
 * Exercici 6
 * Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament */
 const numerosArray3 = [11, 12, 13, 14];
 const totsMajorsQue10 = numerosArray3.every(num => num > 10);
 const algunsMajorsQue10 = numerosArray3.some(num => num > 10);
console.log(totsMajorsQue10); 
console.log(algunsMajorsQue10); 