/**Nivell 1
 * Exercici 1
 * Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.**/


const add = (a, b) => a + b;
// Ejemplo de uso:
console.log(add(2, 3));


/**Exercici 2
Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100. */

const randomNumber = () => Math.floor(Math.random() * 101);
// Ejemplo de uso:
console.log(randomNumber());

/**Exercici 3
 * Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.**/
class Person {
  constructor(name) {
    this.name = name;
    this.greet = () => {
      console.log(`Hola, ${this.name}`);
    }
  }
}
// Ejemplo de uso:
const persona = new Person('Carlos');
persona.greet();

/**Nivell 2
 * Exercici 4
Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.*/
const printNumbers = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    const print = () => console.log(numbers[i]);
    print();
  }
}
// Ejemplo de uso:
printNumbers([1, 2, 3]);

/**Nivell 3
 * Exercici 5
 * Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.
 */
const delayedMessage = () => {
  setTimeout(() => {
    console.log("Aquest missatge apareix després de 3 segons.");
  }, 3000);
}
// Ejemplo de uso:
delayedMessage();