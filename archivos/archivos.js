const fs = require('fs');

const crearArchivo = (tabla = 5) => {
    const nombreArchivo = `Tabla-${tabla}.txt`;
    let datos = '';

    for (let i = 1; i < 11; i++) {
        datos += `${tabla} x ${i} = ${tabla*i} \n`;
    }

    fs.writeFile(nombreArchivo, datos, (err) => {
        if (err)
            console.log('Error al generar el archivo')
        else
            console.log(`Se genero el archivo [${nombreArchivo}] correctamente!!`);
    })
};

module.exports = { crearArchivo }