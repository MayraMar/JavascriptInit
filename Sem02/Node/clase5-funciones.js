function test1(x, y) {
    return y - x
}
console.log(test1(10, 40))


function test2(x, y){
    return x * 2
    console.log(x)
    return x / 2
}
console.log(test2(10))

// Funcion pulgada a centimetros
function pulgadaACm(x){
    return x * 2.54
}
console.log(pulgadaACm(2))

// Funcion 2
function url(nombre){
    return `http://www.${nombre}.com`
}
console.log(url("pepito"))

// Funcion 3
function admiracion(frase){
    return frase+"!"
}
console.log(admiracion("Hola"))

// Funcion 4
function aniosXCiete(edad){
    return edad * 7
}
console.log(aniosXCiete(5))

// Funcion 5
function valorHora(sueldo){
    return sueldo/40
}
console.log(valorHora(5000))

// Funcion 6
function imc(peso, altura){
    return peso / (altura ** 2)
}
console.log(imc(65, 1.74))
console.log(imc(58, 1.64))
console.log(imc(71, 1.70))

// Funcion 1 (NIVEL PRO)
function mayuscula(texto){
    return texto.toUpperCase()
}
console.log(mayuscula("hola como estas?"))

// Funcion 2
function tipoVariable(dato){
    return typeof dato
}
console.log(tipoVariable(5))
console.log(tipoVariable("Hola"))
console.log(tipoVariable(true))

// Funcion 3
function circunferencia(radio){
    return 2 * Math.PI * radio 
}
console.log(circunferencia(2))
console.log(circunferencia(0.5))