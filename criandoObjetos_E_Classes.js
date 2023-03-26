
/*
const pessoa = {
    nome: `Pedro Henrique Pinheiro Passos`,
    idade: 21,
    altura: 1.75,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`) // o this assume o contexto que ele tá
    }
}

pessoa.descrever()


********************************************************************************************************************************************************************************

class Pessoa {
    nome;
    idade;
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade ${this.idade}`)
    }
}

const pedro = new Pessoa();
pedro.nome = 'pedro henrique';
pedro.idade = 21;

pedro.descrever()




******************************************************************************************************************************************************************************


class Carro {
    nome;
    cor;
    ano;
    marca;
     constructor(){
        this.ano = 2023 - 2
     }
    descrever(){
        console.log(`O seu carro é um ${this.nome} da marca ${this.marca} do ano ${this.ano} e cor ${this.cor}`)
    }

}

const celta = new Carro();
celta.nome = `celta`;
celta.cor = `vermelho`;
celta.marca = `chevole`;

celta.descrever()

*/


class pessoa {
    nome;
    idade;
    ano 
  

   constructor(idade){
    this.ano = Number(idade - 2023) 
   }

    descrever() {
        console.log(`Meu nome é ${this.nome} nasci no ano de ${this.ano} e tenho ${this.idade} `)
    }
}
 
const dadosPessoa = new pessoa(12);
dadosPessoa.nome  = `Pedro Henrique Pinheiro Passos`;
dadosPessoa.idade = 22

dadosPessoa.descrever()