const db = require("../models");

const Products = db.products

const mockProducts = [
    {
        name: "Playstation",
        img: "https://picsum.photos/200",
        description: "Um console de videogame bem popular"
    },
    {
        name: "Livro do Harry Potter",
        img: "https://picsum.photos/200",
        description: "Um livro da coleçao de livros do bruxao"
    },
    {
        name: "Maquina de lavar roupa",
        img: "https://picsum.photos/200",
        description: "Uma maquina que lava suas roupas pra ti"
    },
    {
        name: "Maquina fotografica",
        img: "https://picsum.photos/200",
        description: "Maquina feita pra tirar fotos"
    },
    {
        name: "Teclado Gamer",
        img: "https://picsum.photos/200",
        description: "Um teclado feito para melhor desempenho de gamers"
    },
    {
        name: "Camiseta",
        img: "https://picsum.photos/200",
        description: "Uma peça de roupa que se usa na parte de cima do corpo"
    },
    {
        name: "Lanterna",
        img: "https://picsum.photos/200",
        description: "Aparelho feito para criar luz direcionada"
    },
    {
        name: "Panelas",
        img: "https://picsum.photos/200",
        description: "Cuias de aluminio feitas para cozinhar alimentos"
    },
    {
        name: "Kit de Pneus",
        img: "https://picsum.photos/200",
        description: "4 pneus para serem usados em um carro"
    },
    {
        name: "Baralho",
        img: "https://picsum.photos/200",
        description: "Um conjunto de cartas para os mais diversos jogos"
    },
]

module.exports = () =>{
    for(const product of mockProducts){
        // console.log(product)
        Products.create(product)
    }
}