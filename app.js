const { crearArchivo } = require('./archivos/archivos');
const tabla = 5;

crearArchivo(tabla).then((nombreArchivo) => {
    console.log(`Se genero el archivo [${nombreArchivo}] correctamente!!`);
}, (error) => {
    console.log(`Error al generar el archivo: ${error}`);
});