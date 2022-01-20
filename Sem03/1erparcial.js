console.log('----------PRIMER PARCIAL DE PROGRAMACION IMPERATIVA----------');
console.log('----ESTE ES EL ARCHIVO PARA HACER TESTS DURANTE EL PARCIAL----');

function cuadradoDeUnNumero(n){
    if(typeof n!='number'){
        return `No es posible operar con el tipo de dato ${typeof n}`;
    } else{
        return n**2;
    }
}
console.log(cuadradoDeUnNumero('Mayra'));
console.log(cuadradoDeUnNumero(true));
console.log(cuadradoDeUnNumero(3));

//const resultado=13==='13';
//console.log(resultado);

let numero=10;
console.log(++numero);
console.log(numero++);
console.log(numero);

let x=10;
let y=-10
console.log(x+y);

function sumar(a,b){
    let resultado=a+b;
    return resultado;
}

//console.log(resultado);

console.log(0*(-120));