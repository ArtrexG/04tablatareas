const argv = require('./config/yargs').argv;
const porHacer = require('./porHacer/porHacer.js')
const colors = require('colors');
console.log(argv);

let command = argv._[0];

switch(command){
    case("crear"):
        console.log(porHacer.crear(argv.d));
        break;
    case("listar"):
        let listado = porHacer.getListado();
        
        for(let tarea of listado){
            console.log('=======POR HACER ======='.green);
            console.log(`${tarea.descripcion}`);
            console.log(`Completado: ${tarea.completar}`);
            console.log('========================'.green);

        }
    
        
        break;
    case("actualizar"):

        let actualizado = porHacer.actualizar(argv.descripcion,argv.completar);
        console.log("la actualizacion es: "+ actualizado);
        break;
    case("borrar"):
        let borrado = porHacer.borrar(argv.d);
        console.log("el borrado ha sido " + borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}