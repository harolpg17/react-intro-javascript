const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola Mundo`;


console.log(saludar('Harol'));
console.log(saludar2('Harol'));
console.log(saludar3('Harol'));
console.log(saludar4());



const getUser = () => ({
    uid: 123,
    username: 'pere'
});

console.log(getUser());

//////

const getUsuarioActivo = (nombre) => ({
    uid: 123,
    username: nombre
})
console.log(getUsuarioActivo('Harol'))