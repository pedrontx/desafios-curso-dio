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
//essa função calcula  o desconto dependendo da forma de pagamento 
function calculaEDesconto(precoEtiqueta, desconto){
    return (desconto / 100) * precoEtiqueta
}
//essa função calcula o juros dependendo da forma de pagamento
function calculaJuros (precoEtiqueta, desconto){
    return (desconto / 100) * precoEtiqueta

}

//essa função classifica a forma de pagamento 
function classificaFormaDePagamento (precoEtiqueta, formaDePagamento){
    if (formaDePagamento === 1) {
        desconto = 10
        return `O preço final na forma de pagamento debito é: ${precoEtiqueta - calculaDesconto(precoEtiqueta, desconto)}`
    } else if (formaDePagamento ===  2) {
        desconto = 15
        return `O preço final na forma de pagamento dinheiro ou pix: ${precoEtiqueta - calculaDesconto(precoEtiqueta, desconto)}` 
    } else if (formaDePagamento === 3) {
        return `O preço final na forma de pagamento dividido em duas vezes é: ${precoEtiqueta}`
    } else if (formaDePagamento >= 4) {
        desconto = 10
        return` O preço final na forma de pagamento dividido em mais de duas vezes é: ${precoEtiqueta + calculaJuros(precoEtiqueta, desconto)}`
    }
}
//essa função é a função main. ela é uma função auto execultavel 
(function main (){
    let precoEtiqueta = 100
    let formaDePagamento = 3;
    let desconto = 0
    let classifica = classificaFormaDePagamento(precoEtiqueta, formaDePagamento)
    console.log(classifica)
})()




