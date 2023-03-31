const conjutosDeEntradas = [5,50,10,98,23];
let i = 0


function gets(){
   const valor =  conjutosDeEntradas[i];
    i++;
    return valor
}

function print(texto){
    console.log(texto);
}


module.exports = {gets, print}; // estaimportando as funções gets e print



 