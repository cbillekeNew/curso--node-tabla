const { crearArchivoAsync } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const color = require('colors');

console.clear();

crearArchivoAsync(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, '\r\nEl archivo ha sido creado'))
    .catch(err => console.log(err));

//console.log(process.argv);
//console.log(argv);
//console.log('Valor base: yargs', argv.base);

/* 
const [ , ,arg3 = 'base=0'] = process.argv;
const [ , base = 0] = arg3.split('=');

console.log(base); 
//const base = 7;
 */
