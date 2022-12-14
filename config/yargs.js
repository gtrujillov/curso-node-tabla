const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: 'false',
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
    })
    .check((argv, options) => {
        if (isNaN(argv.b )) {
            throw 'La base tiene que ser un número';
        }
        if (isNaN(argv.h)) {
            throw 'La variable hasta tiene que ser un número';
        }
        return true;
    })
    .argv;

    module.exports = argv;