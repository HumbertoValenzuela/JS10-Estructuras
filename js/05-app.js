// 5. Switch para evaluar múltiples Condiciones

const metodoPago = 'efectivo'; // debito

switch (metodoPago) {
    case "efectivo":
        console.log(`pagaste con ${metodoPago}`);        
        break;
    case "debito":
        console.log(`Pagaste con ${metodoPago}`);
        break;

    default:
        console.log('pago no soportado');
        break;
}