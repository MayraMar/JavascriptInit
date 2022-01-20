//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!
//Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una propiedad llamada “clientes”, que estará compuesta de la lista de objetos obtenidos en el punto anterior.
  const banco = {
      clientes: arrayCuentas,
/*Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el objeto cliente que corresponda con ese nombre ingresado.

ayuda: let clienteEncontrado =  banco.consultarCliente(“Ramon Connell”);
*/
    consultarCliente: function (nombre){
        for(let i = 0; i < this.clientes.length;i++){
            if(this.clientes[i].titularCuenta === nombre){
                    return this.clientes[i]
            }
        }
    },
    deposito: function (titular,cantDinero){
        for(let i = 0; i < this.clientes.length;i++){
            if(this.clientes[i].titularCuenta === titular){
                this.clientes[i].saldoEnPesos=this.clientes[i].saldoEnPesos+cantDinero;
                console.log(`Depósito realizado. Su nuevo saldo es ${this.clientes[i].saldoEnPesos}`);
                return;
            }
        }
    },
    extraccion: function(titular,montoExtraccion){
        let indexCliente=0;
        for(let i = 0; i < this.clientes.length;i++){
            if(this.clientes[i].titularCuenta === titular){
                indexCliente=i;
            }
        }
        if (this.clientes[indexCliente].saldoEnPesos>=montoExtraccion){
            this.clientes[indexCliente].saldoEnPesos=this.clientes[indexCliente].saldoEnPesos-montoExtraccion;
        } else {
            console.log("Fondos insuficientes");
        }
        console.log(`Extraccion realizada correctamente, su nuevo saldo es: ${this.clientes[indexCliente].saldoEnPesos}`);
        
    }
}


// Crear un último método llamado extracción, que recibirá también dos
// parámetros: el titular de cuenta y el monto a extraer. El método debe obtener
// la cuenta correspondiente y restar el monto al saldo actual. En caso de que el
// resultado sea menor a 0, deberá imprimir un mensaje por la consola de
// “Fondos insuficientes”, de lo contrario deberá imprimir “Extracción realizada
// correctamente, su nuevo saldo es: xxx”.

//   4. Crear otro método llamado depósito, que recibirá dos parámetros, el titular de
//   cuenta y una cantidad de dinero a depositar. El método debe obtener a la
//   cuenta correspondiente y luego sumar la cantidad de dinero a depositar a saldo
//   en pesos. Luego, deberá dar un aviso por la consola con el mensaje “Depósito
//   realizado, su nuevo saldo es: xxx”.


  console.log(banco.consultarCliente("Ansel Ardley"));
  banco.deposito("Ansel Ardley",1000);
  banco.extraccion("Ansel Ardley",1000);

  function propiedadUnica (array,string){
    let rta=[];
    for(let i=0;i<array.length;i++){
        rta.push({[string]: array[i][string]})
    }
    return rta;
  }

  let array = [ { nombre: 'Lean', edad: 27 }, { nombre: 'Ez', edad: 49} ]
  console.log(propiedadUnica (array,'nombre'))

  let mayra={nombre:'may',edad:34};
  let key='hobbie';
  mayra[key]='foto';
  console.log(mayra);
  let ale={[key]:'run'};
  console.log(ale);

  // SEGUNDO EXTRA - ALUMNOS Y PROMEDIOS

  let Alumno = function(nombre, legajo, notas){
    this.nombre=nombre;
    this.legajo=legajo;
    this.notas=notas;
    this.promedio = function (){
      let total=0;
      for (let i=0; i<this.notas.length;i++){
        total+=this.notas[i];
      }
      return total/this.notas.length;
    };
    this.aprobado = function (notaMin){
      return this.promedio()>=notaMin ?  'Aprobado!' : 'No aprobó :('
    }
  }

  let fido=new Alumno ('Fidel Bisio', 1234, [2,4,6,8])
  console.log(fido);
  console.log(fido.promedio());
  console.log(fido.aprobado(4));
  console.log(fido.aprobado(6));