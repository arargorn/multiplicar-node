const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 9) => {
    let tabla = '';
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido '${limite}' no es un número`);
            return;
        }
        console.log('======================='.green);
        console.log(`======Tabla del ${base}======`.yellow);
        console.log('======================='.blue);

        for (var i = 1; i < limite + 1; i++) {

            console.log(`${base} * ${i}  = ${i*base}`.rainbow);
        }

    });
};


let crearArchivo = (base, limite = 9) => {
    let tabla = '';
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido '${limite}' no es un número`);
            return;
        }

        for (var i = 1; i <= limite; i++) {

            //console.log(`${base} * ${i} = ${base*i}`);
            tabla += `${base} * ${i} = ${base*i} \n`;
        }


        fs.writeFile(`tablas/tabla-del-${base}-hasta-${limite}.txt`, tabla, (err) => {
            if (err) reject(err);
            else resolve(`tabla-del-${base}-hasta-${limite}.txt`);

        });

    });
};

module.exports = { crearArchivo, listarTabla };