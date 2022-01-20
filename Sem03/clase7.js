
!true  // FALSE
!false // TRUE
!!false // FALSE
!!true // TRUE
!1 // FALSE
!!1 // TRUE
!0 // TRUE
!!0 // FALSE
!!"" // FALSE


let x = 5 ;
let y = 9;
x < 10 && x!==5 //FALSE
x>9 || x===5 // TRUE
!(x===y) // TRUE

// 1)
let x=10
let y ="a"
y==="b" || x >= 10 // TRUE

// 2)
let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y) // FALSE

// 3)
let str = ""
let msj = "jaja!"
let esGracioso = "false"
!((str || msj) && esGracioso) // FALSE



// 1)
function acceso(edad, altura){
    let edadMinima = edad > 12;
    let alturaMinima = altura > 1.30;
    return edadMinima && alturaMinima;
}
console.log(acceso(14, 1.40))

// 2)
function camaraFlash(luz, movimiento){
    return luz == false || movimiento == true
}
console.log(camaraFlash(true, false))

// 3) 
function aprueba(parcial1, parcial2, final){
    return (parcial1 > 7 && parcial2 > 7) || final >= 4 
}
console.log(aprueba(7.01, 7.01, 3))

// 4)
function verTV(tarea, piano, memoria){
    return tarea == true && (piano == true && memoria == true)
}
console.log(verTV(true, true, false))