const productos = [
    { nombre: " Laptop", precio: 12000 },
    { nombre: " Mouse", precio: 250 },
    { nombre: " Teclado", precio: 750 },
    { nombre: " Monitor", precio: 3000 },
   
];

const filtrar = productos.filter (({precio}) => precio > 1000)
const nombresproduc = filtrar.map(({nombre})=> nombre)

console.log(nombresproduc);

