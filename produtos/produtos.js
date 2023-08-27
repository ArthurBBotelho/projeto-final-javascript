// ---------------------------------------CONSTRUTOR DE PRODUTOS

// class Produtos {
//     construtor(id, nome, imagem, categoria, preço, estoque, vendido) {
//         this.id = id;
//         this.nome = nome;
//         this.imagem = imagem;
//         this.categoria = categoria;
//         this.preço = parseFloat(preço);
//         this.estoque = estoque;
//         this.vendido = vendido;
//     }
//     tela() {
//         console.log("Restam apenas " + this.estoque + " do produto " + this.nome);
//     }
// }

// let cadeiraComfy = new Produtos(1, "Cadeira Comfy", "../imagem/produtos/outline-sofa/outline-sofa.png", "cadeira", 1490.90, 16, false);

// cadeiraComfy.tela()

const produtos = [{
    id: 1,
    imagem: "imagem/produtos/cadeira-comfy/cadeira-confy.jpg ",
    nome: "Cadeira Comfy",
    categoria: "cadeira",
    link: "cadeira-comfy",
    preço: 1490,
    estoque: 16,
    vendido: false
},
{
    id: 2,
    imagem: "imagem/produtos/outline-sofa/outline-sofa.png",
    nome: "Sofa Outline",
    categoria: "sofa",
    link: "sofa-outline",
    preço: 6390,
    estoque: 8,
    vendido: false
},
{
    id: 3,
    imagem: "imagem/produtos/sofa-phillip/sofa-phillip.png",
    nome: "Sofa Phillip",
    categoria: "sofa",
    link: "sofa-phillip",
    preço: 4190,
    estoque: 3,
    vendido: false
},
{
    id: 4,
    imagem: "imagem/produtos/cadeira-quad/cadeira-quad.jpg",
    nome: "Cadeira Quad",
    categoria: "cadeira",
    link: "cadeira-quad",
    preço: 1860,
    estoque: 15,
    vendido: false
}];

for (const produto of produtos) {
    let container = document.createElement("div");

    container.innerHTML = `<h3> ID: ${produto.nome}</h3>
                           <a href="${produto.link}/${produto.link}.html"><img src="../produtos/${produto.link}/imagem/${produto.link}.png"></a>
                            
                            <p> $ ${produto.preço}</p>`;
    document.body.appendChild(container);
}
