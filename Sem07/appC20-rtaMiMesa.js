const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");


//A

let primerosCincoProfesionales =  arrayProfesionales.slice(0, 5);
console.log(primerosCincoProfesionales);

//B

let nuevoProfesional = arrayProfesionales.splice(13,1,{
    identificador: 250,
    estaHabilitado: true,
    honorarioConsulta: 8000,
    edad: 52,
    nombre: 'Linus Torvalds',
    especialidad: 'Junior Developer',
    cantidadConsultas: 48,
    puntuacion: 50
    });

console.log(nuevoProfesional);
console.log(arrayProfesionales);

//C

/* lo que estabamos probando
function ordenar (array, valorAComparar){
    let ordenamiento = functarray.sort((a,b) a.valorAComparar - b.valorAComparar)
}
*/ 

let ordenar = arrayProfesionales.sort((a, b) => a.honorarioConsulta - b.honorarioConsulta);

console.log(ordenar);
//D

//E

//F

//G 

//H 



// console.log(arrayProfesionales)

// A 

// B

