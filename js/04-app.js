// 4. Mayor o Igual y else if

const dineros2 = 1300;
const totalAPAga2 = 500;
const tarjeta2 = false;
const cheque = true;

// El if, else if y else solo entrega una respuesta. 
// A pesar de que otras condiciones se cumplan. Si una se cumple, este termina
if( dineros2 >= totalAPAga2){
    console.log('Si podemos');    
} else if(tarjeta2){
    console.log('Si puedo. Tengo tarjeta');
} else if(cheque){
    console.log('Si tengo cheque');
} else {
    console.log('Fondos Insuficientes');
}