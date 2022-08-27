const fs = require('fs');
const color = require('colors');

const crearArchivo = (base = 0) => {
    console.log('=======================');
    console.log('    TABLA del:', base);
    console.log('=======================');

    let salida = '';
    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\r\n`;
    }

    /* fs.writeFileSync(`Tabla-${base}.txt`, salida, err => {
        if (err) throw err;
        console.log('Archivo de la tabla del:', base, 'creada correctamente.');
    }) */

    console.log(salida);
    fs.writeFileSync(`Tabla-${base}.txt`, salida);

    console.log('Archivo de la tabla del:', base, 'creada correctamente.');
    console.log('=======================');
}

const crearArchivoAsync = async (base = 1, hasta = 10, listar = false) => {


    try {
        let salida, salidatxt = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${color.red(base)} ${' x '.green} ${color.red(i)} ${' = '.green} ${color.red(base * i)}\r\n`;
            salidatxt += `${base} x ${i} = ${base * i}\r\n`;
        }
        if (listar) {
            console.log('======================='.green);
            console.log('    TABLA del:'.green, color.red(base));
            console.log('======================='.green);
            console.log(salida);
            console.log('======================='.green);
        }


        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salidatxt);
        //console.log('Archivo de la tabla del:', base, 'creada correctamente.');

        return `Tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivoAsync
}