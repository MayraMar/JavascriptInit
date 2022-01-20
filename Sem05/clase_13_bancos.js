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
    }
  }

  console.log(banco.consultarCliente("Ansel Ardley"));
