const personas=[
    {nombre:"Ana", edad:22},
    {nombre:"Luis", edad:35},
    {nombre:"María", edad:28},

]

const {nombre, edad}=personas[0];

//find 
const encontrar=personas.find(({nombre})=> nombre==="Luis");
console.log(encontrar);

//foreach 
personas.forEach(({nombre, edad})=> 
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`));
   
//reduce 
const totaledades=personas.reduce((suma, {edad})=> suma + edad, 0);
console.log(`La suma de todas las edades es: ${totaledades}`);