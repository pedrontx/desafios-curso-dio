/*
 Faça um programa para calcular o valor de uma viagem.

 você terá 3 variáveis. Sendo elas:
 1° Preço do combustível;
 2° Gasto médio de combustível do carro por KM;
 3° Distância em km da viagem;

 imprima no console o valor que será gasto de combustível para realizar está viagem.
 */

const precoCombustivel = 5.79; //declarei uma variavel para o preço do combustivel.
const kmPorLitro = 10; //declarei uma variavel para quantos km meu carro faz por litro.
const distanciaEmKM = 100; //declarei a diatacia percorida em km.
// dividi a distancia por quantos km meu carro faz e multipliquei pelo preço do combustivel
const valor = (distanciaEmKM/kmPorLitro) * precoCombustivel; 

 console.log("O gasto para ir é: " + valor.toFixed(2));
 console.log("O gasto para ida e volta é: " + (valor+valor).toFixed(2) );