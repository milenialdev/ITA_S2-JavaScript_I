/**Nivell 1
 * Exercici 1
 * Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'. */
const promesa = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hola, món');
        }, 2000);
    });
}


/**Exercici 2
 * Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola. */
promesa().then((resultat) => {
    console.log(resultat);
});
    


 /**Exercici 3
 * Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa. */

const promesaInput = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hola') {
                resolve('Entrada correcta: Hola');
            } else {
                reject('Entrada incorrecta, s\'esperava "Hola"');
            }
        }, 2000);
    });
}

/**Exercici 4
 * Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola. */
 const asyncFunc = async () => {
    const resultat = await promesa();
    console.log(resultat);
}

asyncFunc();

 /**Nivell 2
  * Exercici 5
  * Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch. */

  const asyncFuncWithErrors = async () => {
    try {
        const resultat = await promesa();
        console.log(resultat);
    } catch (error) {
        console.error(error);
    }
  }

  /**Nivell 3
   * Exercici 6
   * Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola. */
  const promesa1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resultat de la promesa 1');
        }, 2000);
    });
  }
  const promesa2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resultat de la promesa 2');
        }, 3000);
    });
  }

  const promeses = async () => {
    try {
        const resultats = await Promise.all([promesa1(), promesa2()]);
        console.log(resultats);
    }
    catch (error) {
        console.error('Error en les promeses:', error);
    }
  }
promeses();
