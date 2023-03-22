/* 
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto medio de combustivel por Km rodado.
    crie um método que dado a quantidade de km e o preço do combustivel nos dê o valor 
    gasto em reais para realizar este percurso.

*/
 class Carro {
    marca;
    cor;
    gastoMedioPorKM;
    
    constructor(marca, cor, gastoMedioPorKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM 
    }

    precoCombustive(quantidadeDeKM, precoCombustive){
        return `${quantidadeDeKM * this.gastoMedioPorKM * precoCombustive}`
    }
    
 }
 let distacia // quantos km o carro faz com o litro 

function media  (distacia){
    return 1/distacia  
}
 let uno = new Carro(`Fiat`, `Prata`, media(12))
 console.log(uno.precoCombustive(70, 5))

const gol = new Carro(`volkswagen`, `Vermelho`, media(14))
console.log(`O valor gasto de combustivem em uma mercedes é ${gol.precoCombustive( 100, 7)}`)

