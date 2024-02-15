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