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