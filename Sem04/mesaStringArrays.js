let arrayTest=['string primero', true,'ale','fido',15,false];
console.log(arrayTest[2]);
arrayTest[0]="modifico primer valor";
console.log(arrayTest);

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])
//undefined

let grupoDeAmigos1 = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk",
"Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos1[1][0]) // spiderman

let str = "un string cualquiera"
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string",
"123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]) // "un string cualquiera"

// colecciones de peliculas

let pelis=["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

function mayusculas(array){
    for  (i=0;i<pelis.length;i++){
        array[i]=array[i].toUpperCase();
    }
    return array;
}

mayusculas(pelis)
console.log(pelis);

let pelisAnimadas=["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function unirArrays (array1,array2){
    mayusculas(array1);
    mayusculas(array2);
    let total=array1;
    for  (i=0;i<array2.length;i++){
        total.push(array2[i])
    }
    return total;
}

let listadoCompleto=unirArrays(pelis,pelisAnimadas);
console.log(listadoCompleto);
console.log(listadoCompleto[0]);

let videojuego=listadoCompleto.pop();
console.log(videojuego);
console.log(listadoCompleto);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// imprimir array en orden inverso y funcion inversor