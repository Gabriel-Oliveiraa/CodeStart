//Método que retorna um boleano, some retorna se algum elemento der true e every se todos derem true

//Some
const numeros = [2,3,4,6,8,9,1];

const numeroMaiorQue10 = numeros.some((numero) => {
    return numero > 10
});

console.log(numeroMaiorQue10)

//Every
const numeros2 = [1,2,3,4,5];

const todosMaioresQue1 = numeros2.every((item) => {
    return item > 1
});

console.log(todosMaioresQue1)