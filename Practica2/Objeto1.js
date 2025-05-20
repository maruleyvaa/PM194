const persona={
    nombre:"Maru",
    edad:21,
    direccion:{
        ciudad:"Qro",
        pais:"MX"
    }
};

const {nombre, edad, direccion:{ciudad}}=persona;
console.log (`Hola, me llamo ${nombre}, tengo ${edad} años de edad y vivo en ${ciudad}.`);

