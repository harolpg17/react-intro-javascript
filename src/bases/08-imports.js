import heroes, {owner}  from '../data/heroes';

// console.log(owner);

export const getHeroeById = (id) => heroes.find((element) => element.id == id);
// console.log(getHeroeById(1));

export const getHeroeByOwner = (owner) => heroes.filter((element) => element.owner == owner);
// console.log(getHeroeByOwner('DC'));
