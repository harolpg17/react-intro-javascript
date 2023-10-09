
const persona = {
    nombre: 'Harol',
    apellido: 'Perez',
    edad: 34,
    direccion: {
        ciudad: 'Medellín',
        zip: 5001,
        lat: 12.1212,
        lng: 23.2323
    }
}

const persona2 = {...persona};
persona2.nombre = 'Sin Nombre';

console.log(persona);
console.log(persona2);