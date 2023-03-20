/*
    2) O IMC - Indece de Massa Corporal é um critério da Organização Mundial de saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula de IMC
    IMC = peso / (altura * altura)


    Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em aultos Condição:
    -Abaixp de 18.5 Abaixo do peso;
    -Entre 18.5 e 25 peso normal;
    -Entre 25 e 30 Acima do peso;
    -Entre 30 e 40 Obeso;
    -Acima de 40 Obsidade grave;
*/

let peso = 70;
let altura = 1.76;
let imc = (peso / (altura * altura)).toFixed(2);

function mostra(imc) {
    return console.log(imc) //crie uma função mostra, para não precisar ficar repetindo o console.log
}

if (imc < 18.5) {
    mostra(`o IMC ${imc} esta abaixo do peso!`);
} else if (imc >= 18.5 && imc <= 25) {
    mostra(`o IMC ${imc} esta no peso normal!`);
} else if (imc >= 25 && imc <= 30) {
    mostra(`o IMC ${imc} esta acima do peso!`);
} else if (imc >= 30 && imc <= 40) {
    mostra(`o IMC ${imc} esta em situação de obesidade! `);
} else if (imc > 40) {
    mostra(`o IMC ${imc} esta em situação de obesidade GRAVE!`)
}