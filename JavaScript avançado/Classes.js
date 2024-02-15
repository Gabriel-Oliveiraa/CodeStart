//Sem usar classe
const usuario = {
    nome: 'Gabriel',
    login() {
        console.log (`${this.nome} fez login!`);
    },
    logout() {
        console.log (`${this.nome} fez logout!`)
    }
}

//Usando classe (Estanciado)
class usuario2 {
    constructor(nome) {
        this.nome = nome
    }

    login() {
        console.log (`${this.nome} fez login!`)
    }

    logout() {
        console.log (`${this.nome} fez logout!`)
    }
}

const usuario2 = new Usuario('John Doe');
const usuario3 = new Usuario('Jane Doe');

//Usando classe (Estático)
class usuario4 {
    constructor(nome) {
        this.nome = nome
    }

    static sayHello() {
        console.log ('Hello world!')
    }

    login() {
        console.log (`${this.nome} fez login!`)
    }

    logout() {
        console.log (`${this.nome} fez logout!`)
    }
}

Usuario.sayHello()

//Herança
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} fez algum barulho!`)
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome)
    }

    falar() {
        console.log(`${this.nome} latiu!`)
    }
}

const animal = new Animal('Simba');
animal.falar()