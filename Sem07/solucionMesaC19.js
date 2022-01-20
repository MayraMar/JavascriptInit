const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("./profesionales");

//A FOREACH
//  arrayProfesionales.forEach(profesional => consolprofesional.log(profesional.nombre + " - "+ profesional.especialidad));

//B FOREACH
//     arrayProfesionales.forEach(profesional => {
//      profesional.honorarioConsulta = profesional.honorarioConsulta + (profesional.honorarioConsulta * 0.05)
//    })
//  consolprofesional.log(arrayProfesionales);

//C
// const profesionalesDeshabilitados = arrayProfesionales.filter(profesional => !profesional.estaHabilitado);
// consolprofesional.log(profesionalesDeshabilitados);

//D FILTER
// const profesionalesHabilitados = arrayProfesionales.filter(profesional => profesional.estaHabilitado);
// consolprofesional.log(profesionaleshabilitados);

//E FILTER
// const arquitectos = arrayProfesionales.filter(profesional => profesional.especialidad === 'Arquitecto');
// consolprofesional.log(arquitectos);

//F FOREACH
//  profesionalesDeshabilitados.forEach(profesional => profesional.estaHabilitado = true);


// G REDUCE
// const cantidadTotalConsultas = arrayProfesionales.reduce((acc, profesional) => acc += profesional.cantidadConsultas ,0)
// consolprofesional.log(cantidadTotalConsultas);

//H MAP
const arrayRecaudacion = arrayProfesionales.map(e => {
  return   {
    nombre:  profesional.nombre,
    especialidad:  profesional.especialidad,
    recaudacion : profesional.cantidadConsultas * profesional.honorarioConsulta
    }
})
console.log(arrayRecaudacion);