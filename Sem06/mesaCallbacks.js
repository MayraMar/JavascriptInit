// // Funcion pulgada a centimetros
// function pulgadaACm(x){
//     return x * 2.54
// }

let pulgadaACm = nro => nro* 2.54;
console.log(pulgadaACm(2))



// // Funcion 2
// function url(nombre){
//     return `http://www.${nombre}.com`
// }

let url=nombre => `http://www.${nombre}.com`
console.log(url("pepito"))

// // Funcion 3
// function admiracion(frase){
//     return frase+"!"
// }

let admiracion= frase=>frase+"!" 
 console.log(admiracion("Hola"))

// // Funcion 4
// function aniosXCiete(edad){
//     return edad * 7
// }

let edadPerro= edad=>edad*7
console.log(edadPerro(5))

// // Funcion 5
// function valorHora(sueldo){
//     return sueldo/40
// }

let valorHora= sueldo =>sueldo/40
console.log(valorHora(5000))

// // Funcion 6
// function imc(peso, altura){
//     return peso / (altura ** 2)
// }
let imc=(peso, altura)=> peso / (altura ** 2)
console.log(imc(65, 1.74))
console.log(imc(58, 1.64))
console.log(imc(71, 1.70))

// // Funcion 1 (NIVEL PRO)
// function mayuscula(texto){
//     return texto.toUpperCase()
// }

let mayuscula=texto=>texto.toUpperCase()

console.log(mayuscula("hola como estas?"))

// // Funcion 2
// function tipoVariable(dato){
//     return typeof dato
// }

let tipoVariable=dato=>typeof dato

console.log(tipoVariable(5))
console.log(tipoVariable("Hola"))
console.log(tipoVariable(true))

// // Funcion 3
// function circunferencia(radio){
//     return 2 * Math.PI * radio 
// }
let circunferencia=radio=>2 * Math.PI * radio
console.log(circunferencia(2))
console.log(circunferencia(0.5))

//Array de nombres
const nombres = ['Martin','Homero','Cosme','Steven','Adam'];
function buscarNombre(nombre){
    let index= nombres.indexOf(nombre);
    if(index>=0){
        return `El nombre ${nombre} fue encontrado`;
    } else return '';
}
//Ejemplo de invocacion
//console.log(buscarNombre('Cosme')); 

function mostrarResultado(string){
    if(string){
        console.log(string);
    } else {
        console.log('Resultado no encontrado');
    }
}

//mostrarResultado(buscarNombre('Cosmee'))

function buscarNombre2(nombre,cb){
    let index= nombres.indexOf(nombre);
    let mje;
    if(index>=0){
        mje= `El nombre ${nombre} fue encontrado`;
    } else mje= '';
    return cb(mje);
}

buscarNombre2('Cosmee',mostrarResultado)