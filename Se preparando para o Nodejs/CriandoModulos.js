const { fistName, lastName, add } = require("./MeuModulo");
const messages = require("./MeuModulo");

const sum = add(4, 4);

console.log(fistName, lastName);
console.log(sum);

const message = messages.getMessages();
console.log(message);
