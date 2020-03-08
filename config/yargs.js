  const opt = {

   descripcion : {
  
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
  
},
//
  completado: {
    
    default: true,
    alias: 'c',
    desc: 'Marca como  completado la tarea'
  
}
  }

const argv = require('yargs')

    .command('crear', 'Crear un elemnto por hacer', opt)
    .command('actualizar', 'Actualiza el estado completo de una tarea', opt)
    .command('borrar', 'Elemnto Borrado',opt)
    .help()
    .argv;

module.exports = {
    argv
}