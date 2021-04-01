// 7. El Operador OR para que se cumpla al menos una condición
const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

// or es más usado
if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log('Si puede pagar');
} else {
    console.log('Fondos Insuficientes');
} 