// 1) Crie um programa que dado um  numero imprima a sua tabuada

let tabuada = 2
let operador = 3
function classifica (){

    if (operador === 1) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${tabuada} + ${i} = ${i + tabuada}`);
        }
    } else if (operador === 2) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${tabuada} - ${i} = ${i - tabuada}`);
        }
    } else if (operador === 3) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${tabuada} x ${i} = ${i * tabuada}`);
        }
    } else if (operador === 4) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${tabuada} / ${i} = ${i / tabuada}`);
        }
    }
    
}

(function main (){
    classifica()
})()
