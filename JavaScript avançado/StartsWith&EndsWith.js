//Ambos testam se um determinado texto começa com ou letra(palavra) ou se termina com aquela letra(palavra)
//Leva em considerção se é Maisc ou minsc
//Podemos determinar onde começa ou onde termina

const texto = 'Ser ou não ser, eis a questão';

//StartsWith
const comecaComSer = texto.startsWith('Ser', 0);

//EndsWith
const terminaComO = texto.endsWith('o');