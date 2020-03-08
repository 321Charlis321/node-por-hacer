const fs = require('fs');

let listadoPorHacer = [];

const dbases= ()=> {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile(`db/data.json`, data, (err) => {
     if (err) throw new Error('No se pudo guardar', err) ;
      });

  }

const cargar = () => {
  try {
    
  listadoPorHacer = require('../db/data.json');
} catch (error) {
  listadoPorHacer = [];
    
}

  // console.log(listadoPorHacer);
}

const crear = (descripcion) => {
    cargar();

  let porHacer = {
    descripcion,
    completado: false
  };
  listadoPorHacer.push(porHacer);
  dbases();
  return porHacer;
}

const getListado = () => {
  cargar();
  return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

  cargar();

  let index = listadoPorHacer.findIndex(tarea =>  tarea.descripcion === descripcion);
  
  if( index >= 0 ) {
    listadoPorHacer[index].completado = completado;
    dbases();
    return true;
  }else {
    return false ;
  }
}
const borrar = (descripcion) => {
  cargar();

  let borra = listadoPorHacer.filter(tarea =>  tarea.descripcion !== descripcion);

    if ( listadoPorHacer.length === borra.length ) {
        return false;
    }else {

      listadoPorHacer = borra;
      dbases();
      return true;

    }
  }
  
module.exports = {
   crear, 
   getListado,
   actualizar,
   borrar
}
