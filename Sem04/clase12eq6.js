const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanador(arregloPtosA, arregloPtosB) {
    let puntosPrimerParticipante = 0;
    let puntosSegundoParticipante = 0;
    for (let i=0;i<arregloPtosA.length;i++){
        if(arregloPtosA[i]>arregloPtosB[i]){
            puntosPrimerParticipante += 1;
        } else if (arregloPtosB[i]>arregloPtosA[i]){
            puntosSegundoParticipante+=1;
        }
    }
    let ganador;
    if(puntosPrimerParticipante>puntosSegundoParticipante){
        ganador='Primer Participante';
    } else if (puntosPrimerParticipante<puntosSegundoParticipante){
        ganador='Segundo Participante';
    } else {
        ganador="Hubo un empate!";
    }
    return ganador;
//continua con esto.
}
console.log("El ganador es: " + encontrarGanador(alicia, bob));

const andre = [23, 69, 99];
const ale = [55, 69, 43];

console.log("El ganador es: " + encontrarGanador(andre, ale));

// MULTIPLOS

function digitalHouse(a,b){
    for(i=1;i<=100;i++){
        if(i%a==0 && i%b==0){
            console.log("Digital House");
        } else if (i%a==0){
            console.log("Digital");
        } else if (i%b==0){
            console.log("House");
        } else {console.log(i)}
    }
}

digitalHouse(5,9)