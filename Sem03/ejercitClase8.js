let edad=40 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)
function accesoBar(edad){
    if(edad%2!=0){
        console.log("¿Sabías que tu edad es impar?");
    }
    if(edad<0){
        console.log("Error, edad inválida. Por favor ingrese un número válido.");
    }
    else if(edad<18) {
    console.log("No puede pasar al bar.")
    }
    else if(edad<21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
    }
    else{
        if(edad===21){
            console.log("Felicitaciones, ha llegado a la mayoría de edad");
        }
    console.log("Puede pasar al bar y tomar alcohol.")
    }
}

function totalAPagar(vehiculo,litrosConsumidos){
    let total=0;
    switch (vehiculo){
        case "moto": 
            total=total+70*litrosConsumidos;
            break;
        case "autobús":
             total+=55*litrosConsumidos;
             break;
        case "coche":
            total+=86*litrosConsumidos;
    }
    if (litrosConsumidos>0 && litrosConsumidos<25){
        total+=50;
    } else {
        total+=25;
    }
    return total;
}

function testMonto(x,litros,vehiculo){
    console.log(x===totalAPagar(vehiculo,litros))
}

testMonto(750,10,"moto");
testMonto(910,10,"coche");
testMonto(600,10,"autobús");
testMonto(2125,30,"moto");
testMonto(2605,30,"coche");
testMonto(1675,30,"autobús");

//numero secreto

function adivinoNro(x){
    let nroSecreto=Math.floor(Math.random()*10);
    if(nroSecreto==x){
        console.log('Felicitaciones');
    } else {
        console.log(`Sigue intentando! El numero secreto era el ${nroSecreto} y tu ingresaste ${x}`);
    }
}

adivinoNro(1);
adivinoNro(1);
adivinoNro(1);

function traductor(palabra){
    switch (palabra){
        case "casa": 
            console.log("house");
        break;
        case "perro":
            console.log("dog");
        break;
        case "pelota":
            console.log("ball");
        break;
        case "arbol":
            console.log("tree");
        break;
        case "genio":
            console.log("genious");
        break;
        default:
            console.log("la palabra ingresada es incorrecta");
        
       }
}

traductor("perro");
traductor("genio");
traductor("otra cosa");

//IF ternario y mas SWITCH

function dividir(a,b){
    if(b===0){
        console.log('No se puede dividir por cero');
    } else {
        console.log(a/b);
    }
}

function dividirBis(a,b){
    console.log(b===0? 'no se puede dividir por cero': a/b)
}

dividir(1,2);
dividir(1,0);
dividirBis(2,2);
dividirBis(2,0);

function barrera (pago){
    return pago===true? 'abrir':'barrera queda baja'
}

console.log(barrera(true));
console.log(barrera(false));

function navidad(fecha){
    console.log(fecha==='25/12'? 'Es navidad!!':'Ufa, no es Navidad :(');
}

navidad('24/12');
navidad('25/12');