const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = (listadoPorHacer)=>{
    let data = JSON.stringify(listadoPorHacer);
    
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}
const cagarDB=()=>{
    try{
        listadoPorHacer = require('../db/data.json');
    }catch{
         listadoPorHacer = [];
    }
    
}

const crear= (descripcion)=>{
    cagarDB();
    let porHacer = {
        descripcion: descripcion,
        completar: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB(listadoPorHacer);
    
    return listadoPorHacer;
}
const getListado=()=>{
    cagarDB();
    
    return listadoPorHacer;
}
const actualizar =(descripcion, completar = true)=>{
    cagarDB();
    let index =listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion === descripcion;
    });
    
    if(index >=0){
        listadoPorHacer[index].completar = completar;
        console.log(listadoPorHacer);
        guardarDB(listadoPorHacer);
        return true;
    }else{
        return false;
    }
    
}
const borrar = (descripcion)=>{
    cagarDB();
    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion = descripcion;
    })
    if(index>=0){
        listadoPorHacer.splice(index,1);
        guardarDB(listadoPorHacer);
        return true;
    }else{
        return false;
    }
}
module.exports= {
    crear,
    getListado,
    actualizar,
    borrar
}