const jsonHelper=require('./lecturaEscritura');

const arrayDeptos=jsonHelper.leerJson('departamentos');
// console.log(arrayDeptos);

const inmobiliaria ={
    departamentos: arrayDeptos,
    listarDepartamentos: function (array){
        array.forEach(function(elem){
            let disponibilidad=elem.disponible? 'está Disponible':'no está disponible';
            console.log(`id: ${elem.id}, precio $ ${elem.precioAlquiler}, ${disponibilidad}, ${elem.ambientes} ambientes`)
        })
    },
    buscarPorID: function(idBuscado){},
    departamentosNoDisponibles: function (){
        let deptosNoDisp=[];
        return deptosNoDisp;
    },
    departamentosDisponibles:function(){},
    filtrarPorAmbientes: function (minAmb){},
    filtrarPorPrecio: function (precioMax){//solo los disponibles
    },
    rebajarPrecioAlquiler: function(porcentaje){
        let deptosRebajados=this.departamentosDisponibles();
        deptosRebajados.
        return deptosRebajados
        // let arrayDisponibles = this.departamentosDisponibles();
        // arrayDisponibles.map(depto => depto.precioAlquiler *= (1 - (porcentaje / 100)));
        // archivos.escribirJson('departamentos', this.departamentos);
        // return this.departamentos;
    //},
    },
    calcularRecaudacion: function(){
        let deptosAlquilados=this.departamentosNoDisponibles();
    },
    ordenarPorPrecio: function(){}
}

module.exports=inmobiliaria;
inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);