// EJERCITACION CREAR UNA CALCULADORA

function sumar (a,b){
    return a+b;
}
function restar (c,d){
    return c-d;
}
function multiplicar (e,f){
    return e*f;
}
function dividir (g,h){
    return g/h;
}

console.log('-------------Testeo de Operaciones/Calculadora-----------------')
console.log('sumo 1,2');
console.log(sumar(1,2));
console.log('resto 1,2');
console.log(restar(1,2));
console.log('multiplico 1,2');
console.log(multiplicar(1,2));
console.log('divido 1,2');
console.log(dividir(1,2));
console.log('divido 1,0');
console.log(dividir(1,0));

//NIVEL 3, FUNCIONES EXTRA

function cuadradoDeUnNumero(z){
    return multiplicar(z,z);
}
function promedioDeTresNumeros(w,x,y){
    return dividir(sumar(sumar(w,x),y),3);
}
function calcularPorcentaje(total,porcentaje){
    return multiplicar(dividir(total,100),porcentaje);
    //total/100*porcentaje
}
function generadorDePorcentaje(porcion,total){
    return multiplicar(dividir(porcion,total),100);
    //porcion/total*100
}

console.log('-------------Testeo de Operaciones NIVEL III-----------------')
console.log('cuadrado de 3');
console.log(cuadradoDeUnNumero(3));
console.log('promedio de 10,20,30');
console.log(promedioDeTresNumeros(10,20,30));
console.log('calcular 10% de 50');
console.log(calcularPorcentaje(50,10));
console.log('5 de 10... que porcentaje es?');
console.log(generadorDePorcentaje(5,10));