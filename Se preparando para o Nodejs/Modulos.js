const fs = require("fs");

fs.writeFileSync("mensagem.txt", "Essa mensagem foi escrita com o módulo fs!");

fs.appendFileSync("exercícioModulos.txt", "Esse é o exercício proposto!");
