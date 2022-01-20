let arr=[2,3]
arr.pop()
arr.pop()
console.log(arr);
var a= arr.pop();
console.log(a);
console.log(arr);

let array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
//snail(array) #=> [1,2,3,4,5,6,7,8,9]

function snail(arr){
    let rta=arr[0];
    if(arr.length==0){
        return arr;
    } else if(arr.length==1){
        return arr[0];
    } else {
        
    for(let i=1;i<arr.length;i++){
        rta.push(arr[i][arr.length-1]);
    }
    for(let x=arr.length-2;x>=0;x--){
        rta.push(arr[arr.length-1][x])
    }
    for(let y=arr.length-2;y>0;y--){
        rta.push(arr[y][0])
    }
    }
    return rta;
}

//console.log(snail(array));

// PRIMERA PASADA ok, INTENTO RECURSIVIDAD

function snailRec(arr){
    
    let n=arr.length
    if(n==0){
        return arr;
    } else if(n==1){
        return arr[0];
    } else if (n==2){
        return [arr[0][0],arr[0][1],arr[1][1],arr[1][0]]
    } else {
        var rta=arr[0];
    for(let i=1;i<arr.length;i++){
        rta.push(arr[i][n-1]);
    }
    for(let x=n-2;x>=0;x--){
        rta.push(arr[n-1][x])
    }
    for(let y=arr.length-2;y>=1;y--){
        rta.push(arr[y][0])
    }
    }
    // ahora recorto la matriz para poder aplicarle la funcion de nuevo
    arr.shift();
    for(let x=0;x<n-1;x++){
        arr[x].pop()
    }
    arr.pop();

    for(let y=0;y<arr.length;y++){
        arr[y].shift();
    }
    return rta.concat(snailRec(arr));//(snailRec(arr)); return snail(rta); BUSCAR COMO CORTABA -- IFS
}

let test1=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(snailRec(array));
console.log(snailRec(test1));

// Otra solucion del CodeWars

snail = function(array) {
    var result;
    while (array.length) {
      // Steal the first row.
      result = (result ? result.concat(array.shift()) : array.shift());
      // Steal the right items.
      for (var i = 0; i < array.length; i++)
        result.push(array[i].pop());
      // Steal the bottom row.
      result = result.concat((array.pop() || []).reverse());
      // Steal the left items.
      for (var i = array.length - 1; i >= 0; i--)
        result.push(array[i].shift());
    }
    return result;
  }