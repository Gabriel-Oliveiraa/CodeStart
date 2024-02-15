//Destructuring em listas
const numeros = [1,2,3,4];

const [primeiro, segundo, terceiro, quarto] = numeros

//const primeiro = numeros[0];
//const segundo = numeros[1];
//const terceiro = numeros[2];
//const quarto = numeros[3];

//Spread Operator em listas
const numeros2 =[1,2,3];

const numeroscom4e5 = [...numeros2, 4, 5];

const [dez, vinte, ...resto] = [10,20,30,40,50]

//Destructuring em objetos
const usuario = {
    primeiroNome: 'Gabriel',
    sobreNome: 'Oliveira',
    idade: 23,
}

const {primeiroNome, sobreNome, idade} = usuario

//Spread Operator em objetos
const {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}