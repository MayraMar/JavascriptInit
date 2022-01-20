const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR

const jsonHelper=require('./jsonHelper');

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A
const carrera={
// B
bicicletas: jsonHelper.leerJson('bicicletas'),
// C
bicicletasPorTanda:4,
// D
ciclistasHabilitados: function(){
    return this.bicicletas.filter(elem=>!elem.dopaje)
},
// E
listarBicicletas: function (array){
    
    let listar= function(elem){
        let estado=elem.estado? 'inhabilitado' : 'habilitado';
        console.log(`Ciclista: ${elem.ciclista}, marca: ${elem.marca}, rodado: ${elem.rodado}, peso: ${elem.peso} kg, largo: ${elem.largo} cm, estado: ${estado}`);
    }
    array.forEach(listar)
},
// F
buscarPorId: function (idBuscado){
    return this.bicicletas.find(elem=>elem.id==idBuscado)
},
// G
filtrarPorPeso: function(pesoMax){
    let habilitados=this.ciclistasHabilitados();
    return habilitados.filter(elem=>elem.peso<pesoMax);
},
// H
ordenarPorRodado: function(){
    return this.bicicletas.sort((e1,e2)=>e1.rodado-e2.rodado);
},

// I
largoPromedio: function(){
    let sumaLargos=this.bicicletas.reduce(((ac,elem)=>ac+elem.largo),0)
    return `El largo promedio de bicicletas es de ${(sumaLargos/this.bicicletas.length).toFixed(2)} cm.`
},
// J
aumentarPeso: function(kg,id){
    let bici=this.buscarPorId(id);
    if(bici){
        bici.peso=bici.peso+kg;
        jsonHelper.escribirJson('bicicletas',this.bicicletas);
    }
    
}
// K

// L

}
/******************************/
/* Ejecución de las consignas */
/******************************/

console.log(v, "\n" + oo + " .D. ");
// Ejecución aquí
console.table(carrera.ciclistasHabilitados());
console.log(o);

console.log(v, oo + " .E.");
carrera.listarBicicletas(carrera.ciclistasHabilitados())
console.log(o);

console.log(v, oo + " .F.");
// Ejecución aquí
console.log(carrera.buscarPorId(1));
console.log(carrera.buscarPorId(33));
console.log(o);

console.log(v, oo + " .G.");
// Ejecución aquí
carrera.listarBicicletas(carrera.filtrarPorPeso(8));
console.log(o);

console.log(v, oo + " .H.");
// Ejecución aquí
console.table(carrera.ordenarPorRodado())
console.log(o);

console.log(v, oo + " .I.");
// Ejecución aquí

console.log(carrera.largoPromedio());
console.log(o);

console.log(v, oo + " .J. ");
// Ejecución aquí
console.table(carrera.buscarPorId(10));
carrera.aumentarPeso(0.850,10);
console.table(carrera.buscarPorId(10));
console.log(o);

console.log(v, oo + " .K. ");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .L. ");
// Ejecución aquí
console.log(o);
