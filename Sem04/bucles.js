function encontreUn5(numeros){
    let i=0;
    do{
        console.log(numeros[i]);
        i++;
    } while (i<numeros.length && numeros[i]!=5)
    if(i<numeros.length-1){
        console.log('Encontre un 5!');
    }
}

encontreUn5([1,2,3])
console.log('segunda vuelta:');
encontreUn5([1,2,5,,3])

function tablaDeMultiplicar(numero) {
	for(i=1;i<11;i++){
		console.log(`${numero} * ${i} = ${i*numero}`)
	}
 	//Escribí tu código aquí   
}

tablaDeMultiplicar(2)