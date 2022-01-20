const carrera=require('./app');

console.log('---TESTS---');
//console.log('---AUTOS HABILITADOS---');
// console.log(carrera.autosHabilitados());
console.log('---listar HABILITADOS---');
carrera.listarAutos(carrera.autosHabilitados());
 console.log('---desHABILITAR TODO---');
 // console.log(carrera.sancionarTodos());

console.log('---buscar MMMN771---');
console.log(carrera.buscarPorPatente('MMN771'));
console.log('---buscar sarasa---');
console.log(carrera.buscarPorPatente('sarasa'));
console.log('---listar CILIND MAX 1500---');
carrera.listarAutos(carrera.buscarPorCilindrada(1500));
console.log('---ORDENAR POR VELOCIDAD---');

carrera.listarAutos(carrera.ordenarPorVelocidad());
console.log(carrera.sancionarVehiculo('sarasa'));
console.log(carrera.sancionarVehiculo('MMN771'));
//console.log(carrera.sancionarVehiculo('LKO710'));
console.log('---TANDA---');
carrera.listarAutos(carrera.generarTanda(1500,2000));
console.log('---PESO PROMEDIO---');
console.log(carrera.pesoPromedio(1500,2000))
console.log('---PODIO---');
console.log(carrera.listarPodio(carrera.generarTanda(1500,2000)))