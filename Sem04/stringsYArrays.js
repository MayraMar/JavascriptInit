// strings

let nombre='Mayra';
console.log(nombre[0]); // EL PRIMER VALOR ES CERO

console.log(nombre.slice(-3));
//arrays - vectores - listas - arreglos (son todos sinonimos!!)

let arr=['Uno','Dos','Tres',1,true];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);

const a=[1];  // en array const no tiene sentido, porque puedo modificarlo.
a.push(1);
console.log(a);
console.log(a.length);


//a=2; // da error porque defini a como constante

let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ];
  
  estudiantes.push(
    {nombre: 'Juan',
      promedio: 5,
      curso : 'iOS'},
   {nombre: 'Miguel',
      promedio: 2,
      curso: 'Android'}
  )

  console.log(estudiantes);