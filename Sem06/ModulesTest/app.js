const usuarios=require('./usuarios/index');
let fs=require('fs');
//console.log(usuarios)

//let pepo=usuarios.newUser('Felipe','Bisio','223','sarasa@sarasa.com');
//usuarios.push(pepo)

function imprimeUsuariosString (array){
    for(let i=0;i<array.length;i++){
        console.log(JSON.stringify(usuarios[i]));
    }
}

imprimeUsuariosString(usuarios)

//funcion que guarda todos los usuarios en un mismo txt
function guardaUsuariosTxt (array){
    for(let i=0;i<array.length;i++){
        fs.appendFileSync(__dirname+'/usuarios.txt',JSON.stringify(usuarios[i]));
    }
}
guardaUsuariosTxt(usuarios); //creo que al correr de nuevo duplicará todo (NO!! pisa el archivo)

//funcion que crea un txt por cada usuario y los guarda
function guardaUsuariosTxt (array){
    for(let i=0;i<array.length;i++){
        fs.writeFileSync(__dirname+'/usuarios/'+array[i].nombre+'.txt',JSON.stringify(usuarios[i]));
    } 
}


// CALLBACKS

function agregarHttp(url) {
    return 'http://'+url;
}

function procesar(array,callback){
    return array.map(callback)
}

function procesar2(array,callback){
    let arrOK=[];
    for(let i=0;i<array.length;i++){
        arrOK.push(callback(array[i]));
    }
    return arrOK;
}

let arr=['www.mayra.com','www.ale.com'];

console.log(procesar(arr,agregarHttp));
console.log(procesar2(arr,agregarHttp))