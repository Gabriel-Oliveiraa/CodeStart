//Const & let para bloquear a variavel dentro do escopo
if (2 + 2 === 4) {
    constmessage = 'hello word';
    console.log(message);
} 

//Var não bloqueia
if (2 + 2 === 4) {
    var message2 = 'olá mundo';
}

console.log(message2);

//Quando usar const ou let? (let pode ser alterada no escopo filho, enquanto const não)
let message3 = 'hello world';

if (1 + 1 === 2) {
    message3 = 'olá mundo'
}

console.log(message3)

const message4 = 'hello world';

if (1 + 1 === 2) {
    message4 = 'olá mundo'
}

console.log(message4)

//Templates strings
const fullName = 'Gabriel Oliveira';
const age = 23;
const city = 'Serra Talhada';

const message6 = `Eu sou ${fullName}, tenho ${age} anos, e sou de ${city}!`

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