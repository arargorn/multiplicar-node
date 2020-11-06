const argv = require('./config/yargs').argv;

const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];



switch (comando) {
    case 'listar':
        listarTabla(argv.b, argv.limite)
            .then(console.log(salida => console.log(salida)))
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.b, argv.limite)
            .then(archivo => console.log(`Archivo ${archivo.red} creado`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}