/*
    3) Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta 
    e a escolha da condição de pagamneto.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
    adequado.

    /Código Condição de pagamento:
    -À vista Débito, recebe 10% de desconto;
    -À  vista no Dinheiro ou no PIX, recebr 15% de desconto;
    -Em duas vezes, preço normal de etiqueta sem juros;
    -Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
let precoEtiqueta = 100
let formaDePagamento = 4
let desconto
/*as formas de pagamento
 1=debito
 2=dinheiro ou pix
 3=parcela duas vezes
 4=parcelar acima de 3 vezes

*/

if (formaDePagamento === 1) {
    desconto = 10
    console.log(`O preço final na forma de pagamento debito é: ${precoEtiqueta - ((desconto / 100) * precoEtiqueta)}`)
} else if (formaDePagamento ===  2) {
    desconto = 15
    console.log( `O preço final na forma de pagamento dinheiro ou pix: ${precoEtiqueta - ((desconto / 100) * precoEtiqueta)}` )
} else if (formaDePagamento === 3) {
    console.log(`O preço final na forma de pagamento dividido em duas vezes é: ${precoEtiqueta}`)
} else if (formaDePagamento >= 4) {
    desconto = 10
    console.log(`${precoEtiqueta + ((desconto / 100) * precoEtiqueta)}`)
}