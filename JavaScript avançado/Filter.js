const numeros = [5,10,15,20,25,30];

const numerosMaioresDoQue10 = numeros.filter ((item) => {
    return numeros > 10
})

console.log(numerosMaioresDoQue10)

//A diferença entre filter e map
//Map e filter retornam listas após uma arrow function, porém no filter, só retorna o que passar pelo teste

const usuarios = [
    {
        nome: 'Steve Jbs',
        idade: 21,
    },
    {
        nome: 'Elon Musk',
        idade: 17,
    },
    {
        nome: 'Jeff Bezos',
        idade: 40,
    }
]

const usuariosMaioresDeIdade = usuarios.filter ((usuario) => {
    return usuario.idade >= 18
})

console.log (usuariosMaioresDeIdade)