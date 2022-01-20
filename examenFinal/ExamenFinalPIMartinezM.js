const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "MAYRA MARTINEZ";
const tema = "TEMA 2";

const { table } = require('console');
const fs = require('fs');
const jsonHelper = require('./jsonHelper');

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A
const gestionDePeliculas={
// B
    peliculas: jsonHelper.leerJson('peliculas'),
// C
    listarPeliculas: function (arrayPelis){
        arrayPelis.forEach(peli=>{
            console.log(`${peli.titulo}, de ${peli.director}. Duración: ${peli.duracion} minutos, ${peli.genero}, (${peli.calificacionIMDB} / 10 en IMDB)`)
        })
    },
// D
    buscarPorId: function (idBuscado){
        return this.peliculas.find(peli=>peli.id==idBuscado);
    },
// E
    peliculasPorGenero: function (generoBuscado){
        return this.peliculas.filter(peli=>peli.genero==generoBuscado);
    },
// F
    filtrarPorCalificacion: function (califMin,califMax){
        return this.peliculas.filter(peli=>peli.calificacionIMDB>=califMin && peli.calificacionIMDB<=califMax);
    },
// G
    ordenarPorDuracion: function (){
        return this.peliculas.sort((peli1,peli2)=>peli2.duracion-peli1.duracion);
    },
// H
    duracionPromedio: function(){
        let sumaDuracion=this.peliculas.reduce((ac,peli)=>ac+peli.duracion,0);
        return `El promedio de duración de las películas es de: ${sumaDuracion/this.peliculas.length} minutos`
    },
// I
    modificarGeneroPorId: function(idBuscado,nuevoGenero){
        let peliModificada=this.buscarPorId(idBuscado);
        if(peliModificada){
            peliModificada.genero=nuevoGenero;
            jsonHelper.escribirJson('peliculas',this.peliculas);
        } else {
            return peliModificada;
        }
    }
}
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " TABLA DE PELIS COMPLETA");
console.table(gestionDePeliculas.peliculas);

console.log(v, "\n" + oo + " .C. Listar");
// Ejecución aquí
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas);
console.log(o);

console.log(v, oo + " .D. Buscar");
// Ejecución aquí
console.table(gestionDePeliculas.buscarPorId(9));
console.log(gestionDePeliculas.buscarPorId(11));
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
// Ejecución aquí
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculasPorGenero('Horror'))
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
// Ejecución aquí
gestionDePeliculas.listarPeliculas(gestionDePeliculas.filtrarPorCalificacion(7,8));
console.log(o);

console.log(v, oo + " .G. Ordenar");
// Ejecución aquí
gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorDuracion());
console.log(o);

console.log(v, oo + " .H. Duracion");
// Ejecución aquí
console.log(gestionDePeliculas.duracionPromedio());
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
// Ejecución aquí
console.table(gestionDePeliculas.buscarPorId(1));
gestionDePeliculas.modificarGeneroPorId(1,'Dramón');
console.table(gestionDePeliculas.buscarPorId(1));

console.log(gestionDePeliculas.modificarGeneroPorId(111,'Dramón'));
console.log(o);
