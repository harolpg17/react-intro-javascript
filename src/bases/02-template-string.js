const nombre = "Harol";
const apellido = "Perez Giraldo";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function obtenerSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${obtenerSaludo(nombre)}`);