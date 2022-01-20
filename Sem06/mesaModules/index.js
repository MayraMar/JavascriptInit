const fs=require("fs");
const manejoDatos=require("./manejoDatos");
const NewAuto=require("./newAutos");

const concesionaria={
    autos: manejoDatos.read("AUTOS.json"),
    agregarAuto: function(marca, modelo, anio, precio, patente){
        let vehiculo=new NewAuto (marca, modelo, anio, precio, patente);
        this.autos.push(vehiculo);
        manejoDatos.write('./AUTOS.json',this.autos);
        return 'Vehículo agregado correctamente';
    },
    venderAuto: function(patente){
        let index=0;
        for (let i = 0; i < this.autos.length; i++) {
            if(this.autos[i].patente==patente){
                if(this.autos[i].vendido==true){
                    return `ERROR! El auto ${this.autos[index].marca} ${this.autos[index].modelo} no está disponile para la venta`
                }
                this.autos[i].vendido=true;
                index=i;
                break;
            }
        }
        manejoDatos.write('./AUTOS.json',this.autos);
        return `El auto ${this.autos[index].marca} ${this.autos[index].modelo} ha sido vendido`
    },
    totalVentas: function(){
        let total=this.autos.reduce(function(ac,i){
            if(i.vendido==true){
                return ac+i.precio
               } else return ac},0)
        return `El total de ventas es de $ ${total}`
        
    },
    eliminarAuto: function (patente){
        let index;
        for (let i = 0; i < this.autos.length; i++) {
            if(this.autos[i].patente==patente){
                index=i;
                break;
            }
        }
        if(!index){return `ERROR! No se ha encontrado un vehiculo patente ${patente}`}
        this.autos.splice(index,1);
        manejoDatos.write('./AUTOS.json',this.autos);
        return `El vehiculo patente ${patente} ha sido eliminado`
    }
}



//console.log(concesionaria.autos);
//console.log(concesionaria.agregarAuto('Chevrolet', 'Agile', 2010, 564, 'J5Z898'));
//console.log(concesionaria.venderAuto('J5Y898'));
console.log(concesionaria.totalVentas());
console.log(concesionaria.eliminarAuto('WBA806'));


