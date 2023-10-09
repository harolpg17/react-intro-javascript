import {getHeroeById} from './bases/08-imports'

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
        
//         resolve(heroe);
//         reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa
//     .then((heroe) => {
//         console.log('Heroe', heroe);
//     })
//     .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);

            if (heroe) {
                resolve(heroe);
            } else {
                reject('Se presento una inconsistencia.');
            }
            
            reject('No se pudo encontrar el heroe');
        }, 2000);
    });
}

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.error)