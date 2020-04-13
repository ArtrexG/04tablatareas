let descripcion={
    demand: true,
    alias: 'd',
    desc:'actualiza  de la taea por hacer'
};
const argv = require('yargs')
.command("crear","Crea una tarea por hacer",{
    descripcion
})
.command("actualizar","actualiza una tarea por hacer",{
    descripcion,
    completado:{

        default:true,
        alias:'c',
        desc:'actualizar tarea'
    }
})
.command("borrar","borra una tarea por hacer",{
    descripcion
})
.help().argv;

module.exports= {
    argv
}

