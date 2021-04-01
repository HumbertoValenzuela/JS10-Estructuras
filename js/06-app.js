// 6. El Operador && para revisar que se cumplan 2 o más condiciones

const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Si puede comprar');

} else if (!usuario && !puedePagar){
    console.log('No, no puedes comprar');

} else if(!usuario) {//No es usuario
    console.log('Inicia sesión o saca una cuenta');
    
} else if(!puedePagar){//No es puedePagar
    console.log('Fondos Insuficientes');
} 