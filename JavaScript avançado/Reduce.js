//Serve para reduzir uma lista para um item só

const foguetes = [
    { país: "Russia", lancamentos: 32},
    { país: "US", lancamentos: 23},
    { país: "China", lancamentos: 16},
    { país: "Europe", lancamentos: 7},
    { país: "india", lancamentos: 4},
    { pais: "Japan", lancamentos: 3}
]

const totalDeLancamentos = foguetes.reduce ((acumulador, foguete) => {
    return acumulador + foguete.lancamentos
}, 0)

console.log(totalDeLancamentos)