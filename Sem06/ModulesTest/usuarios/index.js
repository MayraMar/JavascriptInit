let Usuario= function(nombre, apellido, fechaNac,email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.fechaNac=fechaNac;
    this.email=email;
}

let fido=new Usuario ('Fidel', 'Bisio', '2020-06-09','fido@gmail.com');
let may= new Usuario('Mayra', 'Martinez', '2987-03-09','mayri.martinez@gmail.com');
let ale= new Usuario('Alejandro', 'Bisio', '1975-09-22','abisiob@gmail.com');

let usuariosRegistrados=[fido,may,ale];
//console.log(usuariosRegistrados);

 module.exports=usuariosRegistrados;
