function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}

//usuario correcto
verificarUsuario("admin")
    .then((mensaje) => {
        console.log("Usuario: ", mensaje);
    })
    .catch((error) => {
        console.error("Error: ", error);
    });

//usuario incorrecto
verificarUsuario("invitado")
    .then((mensaje) => {
        console.log("Usuario: ", mensaje);
    })
    .catch((error) => {
        console.error("Error: ", error);
    });