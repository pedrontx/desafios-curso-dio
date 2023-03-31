/*
    Uma sala contem 5 alunos e paa cada aluno foi sorteadi um numero de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior
    nímero sorteado.

    Daos de entrada:
    5
    50
    10
    98
    23

    saída:
    98
*/

const { gets, print } = require('./funcoes-auxiliares');// esta exportatando o arquivo funcoes-auxiliares

const numeroSorteado = [];
let maior = 0

for (let i = 0; i < 5; i++) {
    const numero = gets();
    numeroSorteado.push(numero);
}
for (let i = 0; i < numeroSorteado.length; i++){
    const numero = numeroSorteado[i];
    if(numero > maior){
        maior = numero;
    }
}

print(maior)

