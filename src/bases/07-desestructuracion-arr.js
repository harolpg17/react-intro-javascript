const personajes = ['Goku', 'Vegeta', 'Trilin'];

const [ , , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// 

const state = (valor) => {
    return [valor, () => { return 'Hola Mundo'}];
}

const [nombre, establecerNombre] = state('Goku');

console.log(nombre);
console.log(establecerNombre());
