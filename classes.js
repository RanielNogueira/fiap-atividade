class Heroi{

    constructor(nome,identidade, poderDeLuta, tipoDoPoder){
        this.nome = nome
        this.identidade = identidade
        this.poderDeLuta = poderDeLuta
        this.tipoDoPoder = tipoDoPoder;
    }

    apresentacaoHeroi(){
        return `Esse herói se chama ${this.nome} ele possui o poder de ${this.tipoDoPoder}`
    }
}

class Aprendiz extends Heroi{

    constructor(nome,identidade, poderDeLuta, tipoDoPoder, professor){
        
        super(nome,identidade, poderDeLuta, tipoDoPoder)

        this.professor = professor;

    }

    apresentacaoHeroi(){
        return 'Oi'
    }

}

var heroi = new Heroi('Super Man','Clarck Kent',8000,'Força')

var aprendiz = new Aprendiz('Rangex','Raniel Nogueira',25000,'Inteligência','Tony Stark');

console.log(heroi.apresentacaoHeroi())
console.log(aprendiz.apresentacaoHeroi())