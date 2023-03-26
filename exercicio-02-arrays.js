/* 2) Crie um programa que seja capaz de percorrer uma lista de nùmeros e impima cada 
   número par encontrado
*/

let numeros = [0,1,2,3,4,5,6,7]
let par = []
let impar = []
for(let i = 0; i<numeros.length; i++){
    numero = numeros[i];
    if(numero % 2 === 0){
        par.push(numero)
    }else(
        impar.push(numero)
    )
}
console.log(`aqui está todos os numeros par que estão dentro do array ${par}`)
console.log(`aqui está todos os numeros impar que estão dentro do array ${impar}`)