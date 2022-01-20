let peliculas=["star wars","totoro","rocky","pulp fiction","la vida es bella"];

function convertirMayus(array){
    for ( let i=0; i<array.length;i++){
        array[i]=array[i].toUpperCase();
    }
    return array;
}
console.log(convertirMayus(peliculas))

function juntarArrays(lista1,lista2){
    let cantCiclos=lista2.length;
    for(let i=0;i<cantCiclos;i++){
        lista1.push(lista2.shift().toUpperCase())
    }
    return lista1;
}

let pelisAdic=["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

console.log(juntarArrays(peliculas,pelisAdic));

let videoGame=peliculas.pop()
console.log(videoGame);
console.log(peliculas);

function comparaScores(score1,score2){
    let comparacion=[];
    for (let i=0;i<score1.length;i++){
        if(score1[i]===score2[i]){
            comparacion.push('Coincide');
        } else {
            comparacion.push('No coincide');
        }
    }
    return comparacion
}

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

console.log(comparaScores(asiaScores,euroScores));


// EXTRA POINT CONCURSO DE CLAVADOS 

console.log('-----EXTRA POINT CONCURSO DE CLAVADOS-----');  

let participanteA= [5, 8, 4, 9, 5]
let participanteB=[8, 7, 8, 6, 8]
let participanteC=[7, 5, 10, 8, 3]

function puntajePromedio(participante){
    let tot=0;
    for(let i=0;i<participante.length;i++){
        tot=tot+participante[i];
    }
    let promedio= tot/participante.length;
    return promedio;
};

function puntajeMayor(participante){
    let mayor=participante[0];
    for(let i=1;i<participante.length;i++){
        if(participante[i]>mayor){
            mayor=participante[i];
        }
    }
    return mayor;
};

// TESTS
console.log(puntajePromedio(participanteB)===7.4)
console.log(puntajeMayor(participanteA)===9)
console.log(puntajePromedio(participanteA)===6.2)
console.log(puntajeMayor(participanteC)===10)

function competencia(participanteA,participanteB,participanteC){
    
    let promedios={
        participanteA:puntajePromedio(participanteA),
        participanteB:puntajePromedio(participanteB),
        participanteC:puntajePromedio(participanteC)
    };
    let mayores={
        participanteA:puntajeMayor(participanteA),
        participanteB:puntajeMayor(participanteB),
        participanteC:puntajeMayor(participanteC),
    };
    let promedioMayor=promedios.participanteA
    let ganadorPromedio='participanteA'
    for (let clave in promedios){
        if(promedios[clave]>promedioMayor){
            promedioMayor=promedios[clave];
            ganadorPromedio=clave;
        }
    }
    let puntajeMaximo=mayores.participanteA
    let ganadorPuntaje='participanteA'
    for (let clave in mayores){
        if(mayores[clave]>puntajeMaximo){
            puntajeMaximo=mayores[clave];
            ganadorPuntaje=clave;
        }
    }
    console.log(`En la categoría mejor promedio, el ganador es ${ganadorPromedio} con ${promedioMayor} puntos`);
    console.log(`En la categoría mayor puntaje, el ganador es ${ganadorPuntaje} con ${puntajeMaximo} puntos`);
}

competencia(participanteA,participanteB,participanteC);
