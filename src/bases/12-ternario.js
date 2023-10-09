const activo = true;

const mensaje1 = (activo) ? 'Activo' : 'Inactivo';
console.log(mensaje1);

const mensaje2 = activo && 'Activo';
console.log(mensaje2);