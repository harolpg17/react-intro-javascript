const persona = {
    nombre: 'Harol',
    edad: 34,
    clave: 1234,
    rango: 'Soldado'
}

const {nombre, edad, clave} = persona;

console.log(nombre);


const contextPerson = ({nombre, edad, rango = 'Capitán', clave}) => {
    // console.log(nombre, edad, rango);
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.1122,
            lng: 13.2222
        }
    }
}

const {nombreClave, anios, latlng} = contextPerson(persona);
const { lat, lng } = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);