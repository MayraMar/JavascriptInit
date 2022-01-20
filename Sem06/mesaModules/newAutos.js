let NewAuto= function(marca, modelo, anio, precio, patente){
    this.marca=marca;
    this.modelo=modelo;
    this.anio=anio;
    this.precio=precio;
    this.patente=patente;
    this.vendido=false;
}

module.exports=NewAuto;