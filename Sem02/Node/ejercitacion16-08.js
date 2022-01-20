//GRUPO 3: Fernanda Rodriguez, Mayra Martinez, Camilo Mórtigo, Daniela Ramirez, Perla Chalón


// Situacion 1: Salimos a correr
let llueve=false; // tipo booleano
let temperatura=25; //grados centigrados
let horaSalida=18; //tipo numero
let horaRegreso=19; //tipo numero
let hayGanas=true; // tipo booleano
let distancia=5; //en km
let lugar='Playa'; //tipo string

console.log(`Tengo ganas de correr? ${hayGanas}. Llueve? ${llueve}. Hace ${temperatura} grados. Saldré a las ${horaSalida} y volveré a las ${horaRegreso}. Correré ${distancia} km en ${lugar}`)

// Situacion 2: Cocinando un bizcochuelo
let cantHuevos=4;
let cantHarina=300; //en gramos
let cantAzucar=2; //en tazas
let hayYogurt= true;
let cantYogurt=1; //en potes
let tipoHarina='Leudante';
let tempHorno= 200; // en grados centigrados
let tiempoHorneado= 40 //en minutos

if (hayYogurt==false){
    cantYogurt=0;
    let manteca=150; //en gramos
}

console.log('Haré una torta. Necesito: '+cantHuevos+' huevos, '+ cantHarina+' gramos de Harina '+tipoHarina,cantAzucar+' tazas de azucar. Si tengo yogurt  ('+hayYogurt+') utilizo '+cantYogurt+' pote. La torta debe hornearse a '+tempHorno+' grados durante '+tiempoHorneado+' minutos.');

//Ejercicio del ropero. Invertir la ropa.
let cajonPantalones='Remeras';
let cajonRemeras='Pantalones';
let ropaEnLaCama=cajonPantalones;

cajonPantalones = cajonRemeras;
cajonRemeras=ropaEnLaCama;

console.log('Cajon de Remeras: '+cajonRemeras);
console.log('Cajon de Pantalones: '+cajonPantalones);
