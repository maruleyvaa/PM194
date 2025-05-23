
function simularAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    try {
        const datos = await simularAPI();
        console.log("Datos obtenidos:", datos);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}


obtenerDatos();