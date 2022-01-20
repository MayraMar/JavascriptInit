const departamentos = [
    {
      id: 1,
      propietarios: "Dueño: Luis Perez",
      cantidadHabitacion: 2,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 2,
      precioAlquiler: 2395.8
    },
    {
      id: 2,
      propietarios: "Dueños: Luis Perez y María Martinez",
      cantidadHabitacion: 1,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 2,
      precioAlquiler: 1597.2
    },
    {
      id: 3,
      propietarios: "Dueña: Laura García",
      cantidadHabitacion: 2,
      disponible: false,
      aceptaMascotas: false,
      cantidadPersonas: 4,
      precioAlquiler: 3993
    },
    {
      id: 4,
      propietarios: "Dueña: Julieta Tols",
      cantidadHabitacion: 1,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 1,
      precioAlquiler: 1996.5
    },
    {
      id: 5,
      propietarios: "Dueños: Julieta Tols y Pablo Groming",
      cantidadHabitacion: 1,
      disponible: false,
      aceptaMascotas: false,
      cantidadPersonas: 1,
      precioAlquiler: 11979
    },
    {
      id: 6,
      propietarios: "Dueño: Pablo Groming",
      cantidadHabitacion: 2,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 3,
      precioAlquiler: 4658.5
    },
    {
      id: 7,
      propietarios: "Dueño: Luis Perez",
      cantidadHabitacion: 2,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 3,
      precioAlquiler: 3327.5
    },
    {
      id: 8,
      propietarios: "Dueña: Julieta Tols",
      cantidadHabitacion: 3,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986
    },
    {
      id: 9,
      propietarios: "Dueñas: Julieta Tols y Laura García",
      cantidadHabitacion: 3,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986
    },
    {
      id: 10,
      propietarios: "Dueñas: Julieta Tols y Laura García",
      cantidadHabitacion: 3,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986
    },
    {
      id: 11,
      propietarios: "Dueño: Luis Perez",
      cantidadHabitacion: 3,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986
    },
    {
      id: 12,
      propietarios: "Dueño: Juan Pablo Martinez",
      cantidadHabitacion: 3,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986
    },
    {
      id: 13,
      propietarios: "Dueño: Juan Pablo Martinez",
      cantidadHabitacion: 2,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 2,
      precioAlquiler: 4059.55
    },
    {
      id: 14,
      propietarios: "Dueño: Juan Pablo Martinez",
      cantidadHabitacion: 1,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 2,
      precioAlquiler: 3993
    },
    {
      id: 15,
      propietarios: "Dueños: Martín Gutierrez y José Torres",
      cantidadHabitacion: 0,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 1,
      precioAlquiler: 798.6
    },
    {
      id: 16,
      propietarios: "Dueños: Martín Gutierrez y José Torres",
      cantidadHabitacion: 0,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 1,
      precioAlquiler: 798.6
    },
    {
      id: 17,
      propietarios: "Dueños: Martín Gutierrez y José Torres",
      cantidadHabitacion: 0,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 1,
      precioAlquiler: 665.5
    }
  ]

let inmobiliaria = {
    departamentos: departamentos,
    listarDepartamentos: function (){ // si es un arrayExterno rremplazo this.departamento por arrayExterno
        for (let i = 0; i < this.departamentos.length; i++) {
            console.log(`id: ${this.departamentos[i].id}, precio $ ${this.departamentos[i].precioAlquiler}, ${this.departamentos[i].disponible/*===true NO ES NECESARIO PORQUE LA VARIABLE YA ES UN BOOLEANO*/? 'está Disponible':'está Alquilado'}, ${this.departamentos[i].cantidadHabitacion+1} ambientes, máximo ${this.departamentos[i].cantidadPersonas} personas, ${this.departamentos[i].aceptaMascotas===true ? 'acepta mascotas':'No acepta mascotas'}, propietarios: ${this.departamentos[i].propietarios} `);
            
            //id: 2, precio $ 75000, está Disponible, 4 ambientes, máximo 3 personas, acepta mascotas, propietarios: dueña: Laura Gutierrez
        }
    },
    departamentosDisponibles: function (){
        let deptosDisp=[]; //array de deptos disponibles
        for (let i = 0; i < this.departamentos.length; i++) {
            if (this.departamentos[i].disponible===true){
                deptosDisp.push(this.departamentos[i]);
            }
        }
        return deptosDisp;
    },
    buscarPorId: function(id){
        for (let i = 0; i < this.departamentos.length; i++) {
            if (this.departamentos[i].id===id){
                return this.departamentos[i];
            } else {
            return 'Departamento no encontrado'}
        }
    },
    buscarPorPrecio: function (precioMax){
        let deptosDisp=this.departamentosDisponibles();
        let deptosOK=[];
        for (let i = 0; i < deptosDisp.length; i++) {
            if (deptosDisp[i].precioAlquiler<=precioMax){
                deptosOK.push(deptosDisp[i]);
            }
        }
        return deptosOK;
    },

    precioConImpuesto: function (porcentajeImpuesto){
        let arrImpuesto=this.departamentos; // Tengo que crear un nuevo arreglo??
        for (let i = 0; i < arrImpuesto.length; i++){
            arrImpuesto[i].precioAlquiler+=arrImpuesto[i].precioAlquiler*porcentajeImpuesto/100
        }
        return arrImpuesto;
        //devuelve un array con los precios c el impuesto sumado
    },
    simplificarPropietarios: function  (){
        let arrSimplificado=this.departamentos;
        for (let i = 0; i < arrSimplificado.length; i++){
            arrSimplificado[i].propietarios='Prop.'+arrSimplificado[i].propietarios.slice(arrSimplificado[i].propietarios.indexOf(':'));
        }
        return arrSimplificado;
    },
    //Dueños: Martín Gutierrez y José Torres" pasará a ser "Prop.: Martín Gutierrez y José Torres. DA UN ARRAY CON DEPTOS MODIFICADOS
    alquilarDepto: function (indice){
      for (let i = 0; i <this.departamentos.length;i++){
        if(indice==this.departamentos[i].id && this.departamentos[i].disponible==true){
          this.departamentos[i].disponible=false;
          return this.departamentos[i]}
        if(indice==this.departamentos[i].id && this.departamentos[i].disponible==false){
          return 'Este departamento ya se encuentra alquilado'
        }
      }
    },
    rebajas: function (porcentajeRebaja){
      let deptosDisp=this.departamentosDisponibles();
      for(let i=0; i<deptosDisp.length; i++){
        deptosDisp[i].precioAlquiler=deptosDisp[i].precioAlquiler*(1-porcentajeRebaja/100);
      }
      return deptosDisp;
    },
    buscarProp: function(propietario){
      let deptosPropietario=[];
      for (let i = 0; i <this.departamentos.length;i++){
        if(this.departamentos[i].propietarios.includes(propietario)){
          deptosPropietario.push(this.departamentos[i]);
        }
      }
      return deptosPropietario;
    }
  }


console.log('TEST LISTADO');
//inmobiliaria.listarDepartamentos();
console.log('ARRAY DE DEPTOS DISPONIBLES');
//console.log(inmobiliaria.departamentosDisponibles());
console.log('BUSCAR POR ID');
//console.log(inmobiliaria.buscarPorId(1));
//console.log(inmobiliaria.buscarPorId(18));
console.log('Deptos con alquiler por debajo de los $2500: 3, 4 ...');
//console.log(inmobiliaria.buscarPorPrecio(2500));
console.log('Precios con Impuesto 10%.');
//console.log(inmobiliaria.precioConImpuesto(10));
//console.log(inmobiliaria.simplificarPropietarios());
console.log('Alquilo depto 15 NO DISP');
console.log(inmobiliaria.alquilarDepto(15));
console.log('Alquilo depto 17 DISP');
console.log(inmobiliaria.alquilarDepto(17));
console.log('REBAJAS');
//console.log(inmobiliaria.rebajas(10));
console.log('JULIETA');
console.log(inmobiliaria.buscarProp('Julieta'));
console.log('MARTIN');
console.log(inmobiliaria.buscarProp('Martin'));
console.log('PABLO');
console.log(inmobiliaria.buscarProp('Juan Pablo'));