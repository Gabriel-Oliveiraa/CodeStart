const sum = 1+1;

if (sum===2){
    console.log("Sum is 2!");
}else{
    console.log("Sum is not 2!");
}

//&& and ||

const soma1 = 2+2;
const soma2 = 3+3;

if (soma1 === 4 && soma2 === 6){
    console.log("Soma1 é igual a 4 e Soma2 igual a 6");
}

if (soma1 === 4 || soma2 === 6){
    console.log("Soma1 é igual a 4 ou Soma2 igual a 6");
}

//switch

const car = "Ferrari";

switch (car) {
    case "Ferrari"
        console.log("Ferrari és belíssima!");
        break;
    case "Mercedes"
        console.log ("Mercedes é luxuasa!");
        break;
    case "Tesla"
        console.log ("Testa é muito tecnológica!");
        break;
}