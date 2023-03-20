/*
Faça um programa para calcular o valor de uma viagem.

Voce terá 5 variáveis. Sendo elas:
1° Preço do etanol;
2° Preco da gasolina;
3° o tipo de combustível que está no seu carro;
4° Gasto médio de compustivel do carro por km;
5° Distacia em km da viagem;

imprima no console o valor que será gasto para realizar está viagem.
*/

const precoEtanol = 5.79;  // Na variavel precoEtanol usei ela para gravar o preço do etanol;
const precoGasolina = 6.66; // Na variavel precoGasolina usei ela para gravar o preço da gasolina;
const tipoCombustivel = `gasolina`;  // Na variavel  tipoCombustivel usei ela para descreve qual é o tipo de combustivel;
const gastoMedioKm = 10; // Na variavel gastoMedioKm usei para descrever qual a media que o carro faz;
const distaciaEmKm = 100; // Na variavel distanciaEmKm usei para descrever qual é a distacia do meu ponto de partida ate meu pinto de chegada;

if (tipoCombustivel == `gasolina`) {
    console.log(`o valor gatos para realizar essa viagem com  o combustivel ${tipoCombustivel} é de: ${(distaciaEmKm / gastoMedioKm) * precoGasolina.toFixed(2)}`)
} else {
    console.log(`o valor gatos para realizar essa viagem com  o combustivel ${tipoCombustivel} é de: ${(distaciaEmKm / gastoMedioKm) * precoEtanol.toFixed(2)}`)
}

