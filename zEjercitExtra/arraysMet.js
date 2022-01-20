var arr=[1,2,3,'m','n']
let nros=arr.splice(3,2);
console.log('solo nros');
console.log(arr);

arr=[1,2,3,'m','n']
let letras=arr.splice(0,3);
console.log('solo letras');
console.log(arr);

arr=[1,2,3,'m','n']
let nrosCompleto=arr.splice(3,2,4,5);
console.log('nros completo');
console.log(arr);

arr=[1,2,3,'m','n']
let letrasOK=arr.splice(0,3,'j','k','l');
console.log('letras completo');
console.log(arr);

console.log('-------------------------------------------');

console.log(nros);
console.log(letras);
console.log(nrosCompleto);
console.log(letrasOK);


// console.log('KLASSLÑERLKGLKBLKTÑIJKM' === 'KLASSLÑESLKGLKBLKTÑIIKM')
// console.log('IJTIJTIWEJTIWEJTIWETJIWJE' === 'IJTIJTIWEJTIWEJTIWETJJWJET')
// console.log('ZKSJSJSEEKMRJRIJERLEPRLSJ' === 'ZKSJSJSEEKMRJRIJERLEPRLSJ')
// console.log('OREOITKOEKFKOKDFIRMGOT'==='OREOITIKOEKFKOKDFIRNGOT')

let nums=[1,2,3]
let suma=nums.reduce(function(ac,n){return ac+n},10)
console.log(suma);

let divs=nums.reduce(function(ac,n){return ac/n},1)
console.log(divs);