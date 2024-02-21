const validator = require("validator");

const email = "gabrieloliveira.com";

const isEmailValid = validator.isEmail(email);

console.log(isEmailValid);
