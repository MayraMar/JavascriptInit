const fs=require('fs');

function leerJson(archivo){ //lee la base, parsea la info y retorna el objeto
    contenido=fs.readFileSync(archivo,'utf-8');
    if (contenido!=''){
        let objeto= JSON.parse(contenido);
        return objeto;
    } else {
           return []; 
        } 
    
     //si no tiene contenido el archvo retorna un array vacio para evitar erorres en las otras funciones.
}

// function parseoDatos(stringDatos){ //lee el JSON y retorna el objeto
//     return JSON.parse(stringDatos)
// }

function escribirJson(archivo,datos){ //actualiza y sobreescribe toda la base de datos
    let contenido=JSON.stringify(datos)
    fs.writeFileSync(archivo,contenido);
}

const jsonHelper = {
    read: function(nombreArchivo){
        return leerJson(nombreArchivo)},
    write: function (archivo, datos) { 
        return escribirJson(archivo,datos)}
    }

module.exports=jsonHelper;

//console.log(jsonHelper.read('./AUTOS.json'));