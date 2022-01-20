const jsonHelper = require("./lecturaEscritura");
const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

//A
function imprimirEspecialidad() {
    arrayProfesionales.forEach(function(i){
    console.log(i.nombre+' - '+i.especialidad)})
}

imprimirEspecialidad()
//B
function aumento(porcentaje){
    let nuevoHonorario=elemento=>elemento.honorarioConsulta=elemento.honorarioConsulta*(1+porcentaje/100)
    arrayProfesionales.map(nuevoHonorario)
    return arrayProfesionales;
}
console.log(aumento(10));
//C
function listaProfDeshabilitados(){
    let filtro=elemento => !(elemento.estaHabilitado);
    let profesionalesDeshabilitados=arrayProfesionales.filter(filtro)
    return profesionalesDeshabilitados;
}
console.log(listaProfDeshabilitados());
//D
function listaProfHabilitados(){
    let filtro=elemento => elemento.estaHabilitado;
    let profesionalesHabilitados=arrayProfesionales.filter(filtro)
    return profesionalesHabilitados;
}
console.log(listaProfHabilitados());
//E
function verArquis(){
    let filtro=elemento=>elemento.especialidad=='Arquitecto';
    let arquitectos=arrayProfesionales.filter(filtro)
    return arquitectos;
}
console.log(verArquis());
//F
arrayProfesionales.forEach(i=>i.estaHabilitado=true);
console.log(arrayProfesionales);

//G 
function calcularConsultas(){
    let sumar= (acum, indice)=>acum+indice.cantidadConsultas
    return arrayProfesionales.reduce(sumar,0);
}
console.log(calcularConsultas());
//H 
function imprimeRecaudacion(){
    var arrayRecaudacion=[];
    for (indice=0;indice<arrayProfesionales.length;indice++){
        let datosProf={
            nombre:arrayProfesionales[indice].nombre,
            especialidad: arrayProfesionales[indice].especialidad,
            recaudacion:arrayProfesionales[indice].honorarioConsulta*arrayProfesionales[indice].cantidadConsultas
        }
        arrayRecaudacion.push(datosProf);
    }
    //function extraerDatos (indice){
      //  return datosProf;
    return arrayRecaudacion;
    }
  
    function imprimeRecaudacionMap(){
        
        function extraerDatos(indice){
            return {
                nombre:indice.nombre,
                especialidad: indice.especialidad,
                recaudacion:indice.honorarioConsulta*indice.cantidadConsultas
            }
        }
        var recaudacion= arrayProfesionales.map(extraerDatos);
        return recaudacion;
        //function extraerDatos (indice){
          //  return datosProf;
        
        }
console.log(imprimeRecaudacionMap());

const arrayRecaudacionSC = arrayProfesionales.map(profesional => {
    return   {
      nombre:  profesional.nombre,
      especialidad:  profesional.especialidad,
      recaudacion : profesional.cantidadConsultas * profesional.honorarioConsulta
      }
  })
  //console.log(arrayRecaudacionSC);


  // EJERCITACION MESA MIERCOLES 22  - CLASE 20

// RETORNAR LOS PRIMEROS 5 PROFESIONALES

const primerosCincoProfesionales=arrayProfesionales.slice(0,5);
console.log(primerosCincoProfesionales);

//
function reemplazo (orden, nuevoProf){
    arrayProfesionales.splice(orden, 1, nuevoProf)
}

const nuevoProfesional = {
    identificador: 250,
    estaHabilitado: true,
    honorarioConsulta: 8000,
    edad: 52,
    nombre: 'Linus Torvalds',
    especialidad: 'Junior Developer',
    cantidadConsultas: 48,
    puntuacion: 50
}
reemplazo(14,nuevoProfesional);
console.log(arrayProfesionales);

function ordenarPorHonorario (){
    let ordenar= (a,b)=>a.honorarioConsulta-b.honorarioConsulta
    return arrayProfesionales.sort(ordenar)
}
console.log('---ORDENAR---');
ordenarPorHonorario();
console.log(arrayProfesionales);

function buscar(id){
    let encontrar=a=>a.identificador==id
    return arrayProfesionales.find(encontrar)
}

console.log('--buscando el 15--');
let profesional15=buscar(15);
console.log(profesional15);

let profesional250=buscar(250);
console.log(profesional250);

console.log('---array profesionales final ');
console.log(arrayProfesionales);

function guardarDatos(){
    jsonHelper.escribirJson('profesionales',arrayProfesionales)
}

guardarDatos()
