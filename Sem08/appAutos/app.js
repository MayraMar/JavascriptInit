const fs = require('fs');
const jsonHelper = require('./lecturaEscritura');

const carrera ={
    autos:jsonHelper.leerJson('autos'),
    autosPorTanda:6, //CANT MAXIMA
    autosHabilitados: function (){
        return this.autos.filter(e=>!e.sancionado)
    },
    listarAutos: function(array){
        array.forEach(element => {
            let habilitado= element.sancionado ?  'sancionado': 'habilitado';
            console.log(`Piloto: ${element.piloto}, patente: ${element.patente}, peso en kg: ${element.peso}, estado: ${habilitado}`);

        });
    },
    buscarPorPatente: function(patenteBuscada){
        return this.autos.find(element=>element.patente==patenteBuscada);
    },
    buscarPorCilindrada: function(cilindMax){
        let habilitados = this.autosHabilitados()
        return habilitados.filter(element=>element.cilindrada<=cilindMax)
    },
    ordenarPorVelocidad: function (){
        return this.autos.sort((e1,e2)=>e1.velocidad-e2.velocidad) //DE MENOR  MAYOR
    },
    sancionarVehiculo: function(patente){
        let vehiculo= this.buscarPorPatente(patente)
        if(vehiculo){
            if(vehiculo.sancionado){
                return `El vehículo patente ${patente} ya se encontraba sancionado. No se ha realizado ninguna acción`
            } else {
                vehiculo.sancionado=true;
                jsonHelper.escribirJson('autos',this.autos);
                return vehiculo;
            }
        } else return `ERROR. El vehículo patente ${patente} no fue encontrado`
    },
    generarTanda: function(cilindMax,pesoMax){
        let autosAptos1=this.buscarPorCilindrada(cilindMax);
        let autosAptos=autosAptos1.filter(elem=>elem.peso<=pesoMax);
        if (autosAptos.length<=this.autosPorTanda){
            return autosAptos;
        } else {
            console.log('la tanda se ha recortado');
            return autosAptos.slice(0,this.autosPorTanda)
        }
    },
    pesoPromedio: function(cilindMax,pesoMax){
        let tanda=this.generarTanda(cilindMax,pesoMax);
        let sumaPesos=tanda.reduce(((ac,elem)=>ac+elem.peso),0);
        return `El peso promedio de la tanda es de ${sumaPesos/tanda.length} kg.`
    },
    listarPodio:function(array){
        if (array.length<1){return "ERROR. Argumento vacío"}
        let autosOrdenados=array.sort((e1,e2)=>e2.puntaje-e1.puntaje) //de may a menor puntaje
        let podio=autosOrdenados.slice(0,3);
        console.log(`El ganador es: ${podio[0].piloto}, con un puntaje de ${podio[0].puntaje}.`);
        console.log(`El segundo puesto es para: ${podio[1].piloto}, con un puntaje de ${podio[1].puntaje}.`);
        console.log(`El tercer puesto es para: ${podio[2].piloto}, con un puntaje de ${podio[2].puntaje}.`);
        return "Felicitaciones!!";
    },
    sancionarTodos:function(){
        let habilitados=this.autosHabilitados();
        habilitados.forEach(elem=>elem.sancionado=true);
        jsonHelper.escribirJson('autos',this.autos);
        return "Se han deshabilitado los vehiculos y actualizado la DB";
    }

}

module.exports=carrera

// console.log('---TESTS---');
// console.log('---AUTOS HABILITADOS---');
// // console.log(carrera.autosHabilitados());
// console.log('---listar HABILITADOS---');
// carrera.listarAutos(carrera.autosHabilitados());
// console.log('---buscar MMMN771---');
// console.log(carrera.buscarPorPatente('MMN771'));
// console.log('---buscar sarasa---');
// console.log(carrera.buscarPorPatente('sarasa'));
// console.log('---listar CILIND MAX 1500---');
// carrera.listarAutos(carrera.buscarPorCilindrada(1500));
// console.log('---ORDENAR POR VELOCIDAD---');
// //console.log(carrera.ordenarPorVelocidad());
// carrera.listarAutos(carrera.ordenarPorVelocidad());
// console.log(carrera.sancionarVehiculo('sarasa'));
// //console.log(carrera.sancionarVehiculo('MMN771'));
// //console.log(carrera.sancionarVehiculo('LKO710'));
// console.log('---TANDA---');
// carrera.listarAutos(carrera.generarTanda(1500,2000));
// console.log('---PESO PROMEDIO---');
// console.log(carrera.pesoPromedio(1500,2000))
// console.log('---PODIO---');
// console.log(carrera.listarPodio(carrera.generarTanda(1500,2000)))