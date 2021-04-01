// 9. El Operador Ternario

const autenticado = true;
console.log(autenticado ? 'Si esta autenticado': ' No esta autenticado');

// si es verdad y de lo contrario ( : ) en null. para que haga nada
console.log(autenticado ? 'Si esta autenticado': null);


const puedePagar = true;
// dos condiciones en un Ternario && ( y )
console.log(autenticado && puedePagar? 'Si esta autenticado': 'No, no esta autenticado');


// dos condiciones en un Ternario || ( o )
console.log(autenticado || puedePagar? 'Si esta autenticado': 'No, no esta autenticado');

// ternarios anidados
console.log(autenticado ? puedePagar ? 'Si, autenticado y puede pagar' : 'Si, autenticado pero no puede pagar' : 'no, no esta autenticado');

// if anidado y comparar con el ternario
if (autenticado) {
    if(puedePagar){
        console.log('Si, autenticado y puede pagar');
    } else {
        console.log('Si, autenticado pero no puede pagar');
    }
} else {
    console.log('No, no esta autenticado');
}