//Find é utilizado para fazer uma pesquisa em uma lista, porém só retorna o primeiro item correspondente

const pessoas = [
    {
        nome: 'John',
        idade: 18,
    },
    {
        nome: 'Jane',
        idade: 21,
    },
    {
        nome: 'Jane',
        idade: 23,
    }
]

const john = pessoas.find((item) => {
    return item.nome === 'John'
});

//FindIndex é utilizado para encontrar a posição da iteração e também só retorna o primeiro item

const janeIndex = pessoas.findIndex ((item) => {
    return item.nome === 'Jane'
});