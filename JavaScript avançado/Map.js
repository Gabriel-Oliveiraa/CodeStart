const numeros = [1,2,3];

//Como funciona o retorno de lista pelo map

//Primeira interação
//lista map = []
//lista map = [2]

//Segunda interação
//lista map = [2,4]

//Terceira interação
//lista map = [2,4,6]

const numerosMultiPor2 = numeros.map((item, index) => {
    console.log (`index: ${index}, item: ${item}`)
    return item*2
})

console.log(numerosMultiPor2)

const usuarios = [
    {
        nome: 'Gabriel',
        idade: 23,
    },
    {
        nome: 'Felipe',
        idade: 40
    }
]

const usuariosComIdadeMultiPor2 = usuarios.map((item, index) => {
    return {...item, idade: item.idade * 2}
})

console.log(usuariosComIdadeMultiPor2)