/*
    2) Crie uma classe para representa pessoas. 
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça ao José para dizer o valor 
    do seu IMC;
*/
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso;
        this.altura = altura
    }

    calculaImc() {
        return this.peso / (this.altura * this.altura)
    }

    classificaIMC() {
        const imc = this.calculaImc()
        if (imc < 18.5) {
            return `o IMC ${imc} esta abaixo do peso!`;
        } else if (imc >= 18.5 && imc <= 25) {
            return `o IMC ${imc} esta no peso normal!`;
        } else if (imc >= 25 && imc <= 30) {
            return `o IMC ${imc} esta acima do peso!`;
        } else if (imc >= 30 && imc <= 40) {
            return `o IMC ${imc} esta em situação de obesidade! `;
        } else if (imc > 40) {
            return `o IMC ${imc} esta em situação de obesidade GRAVE!`
        }
    }
}


const pedro = new Pessoa(`Pedro`, 73, 1.76)
console.log(`${pedro.classificaIMC()}`)