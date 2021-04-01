// 8. Detener la ejecución de un if con una función

// buenas prácticas con los if
const autenticado = true
// if(autenticado == true) Mala Práctica
if(autenticado) {
    console.log('El usuario esta autenticado');
}

const puntaje = 450;
// los return funcionan en las funciones
// Uncaught SyntaxError: Illegal return statement
// if(puntaje > 400){
//     console.log('Excelent');
//     return;
// }

// notar que ejecuta solo un if
// lo mismo sucede cuando los if estan anidados(else if)
function puntajes(){
    if(puntaje > 400){
        console.log('claro que si');
        return;
    }
    if(puntaje > 300){
        console.log('Buen puntaje...');
        return;
    }
}
puntajes();//claro que si

// otro comportamiento evalua las dos condiciones y arroja dos valores
if(puntaje > 400){
    console.log('Excelent');    
}
if(puntaje > 300){
    console.log('Buen puntaje...');    
}

// if anidado, solo arroja un valor
if(puntaje > 400){
    console.log('Excelent');    
}else if(puntaje > 300){
    console.log('Buen puntaje...');    
}