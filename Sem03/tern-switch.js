let edad=16;
let acceso=edad>=18 ? 'Pase, por favor': 'Acceso denegado';
console.log(acceso);
++edad;
++edad;
acceso=edad>=18 ? 'Pase, por favor': 'Acceso denegado';
console.log(acceso);


function bebida(comida) {
    switch(comida){
    case 'Desayuno':
        console.log('Cafe con leche');
        break;
    case 'Almuerzo':
        console.log('Coca Cola');
        break;
    case 'Cena':
        console.log('Cerveza');
        break;
    default:
        console.log('Tomá lo que quieras');
    }
}

bebida('Desayuno');
bebida('Almuerzo');
bebida('Brunch');