// 2. Comparador Estricto

const puntaje = 2000;

if(puntaje != 1000) { // !=Diferente == igual a
    console.log(' Es Diferente');
} 

const puntos = 1000;
// == no estricto. compara por valor
if(puntos == "1000") { // !=Diferente == igual a
    console.log('es Igual'); // es igual
} else {
    console.log('No es igual');
}


const puntos2 = 1000;
// === estricto. por el valor, y por el tipo de dato
if(puntos2 === "1000") { 
    console.log('es Igual'); 
} else {
    console.log('No es igual');//No es Igual
}

const puntos3 = 1000;
// !== estricto. Si es Diferente
if(puntos3 !== "1000") { 
    console.log('Si es Diferente'); // Si es Diferente
} else {
    console.log('No es Diferente');
}