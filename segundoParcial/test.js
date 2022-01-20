const profesionales = [
    {
      id: 0,
      estaHabilitado: false,
      honorarioConsulta: 2007.68,
      edad: 29,
      nombre: "huber Wilkins",
      email: "huberwilkins@speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 0,
      puntaje: 8,
    },
    {
      id: 1,
      estaHabilitado: true,
      honorarioConsulta: 2325.56,
      edad: 21,
      nombre: "goldie Haley",
      email: "goldiehaley@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 0,
      puntaje: 7,
    },
    {
      id: 2,
      estaHabilitado: false,
      honorarioConsulta: 2208.17,
      edad: 36,
      nombre: "pena Landry",
      email: "penalandry@speedbolt.com",
      especialidad: "Dermatologia",
      cantidadConsultas: 0,
      puntaje: 7,
    },
    {
      id: 3,
      estaHabilitado: false,
      honorarioConsulta: 3266.71,
      edad: 20,
      nombre: "leanne Burch",
      email: "leanneburch@speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 1,
      puntaje: 5,
    },
    {
      id: 4,
      estaHabilitado: false,
      honorarioConsulta: 2674.09,
      edad: 31,
      nombre: "haynes Fuentes",
      email: "haynesfuentes@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 0,
      puntaje: 4,
    }
]


let mayus=profesionales[0].nombre.charAt(0).toUpperCase()
let resto=profesionales[0].nombre.slice(1)

let mayra=[1,2,3];
console.log(typeof(mayra));

console.log(mayus);
console.log(resto);