/*
    1) Faça uma algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a
    sua média e a sua classificação conforme a tabela  abaixo 

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    -Média menor que 5, reprovado;
    -Média entre 5 e 7, recuperação;
    -Média acima de 7, passou de semestre
*/


let notas = [7, 7, 8]; // usei uma array para colocar as 3 notas, mas eu tbm poderia declara 3 variaveis para armazenar as notas;
let media = ((notas[0] + notas[1] + notas[2]) / notas.length).toFixed(2)
if (media > 7) {
    console.log(`Passou de Semestre a media do aluno foi ${media}`);
} else if (media <= 7 && media >= 5) {
    console.log(`Recuperação a media do aluno foi ${media}`);
} else {
    console.log(`Reprovado a media do aluno foi ${media}`);
}







//console.log(media.toFixed(2))

