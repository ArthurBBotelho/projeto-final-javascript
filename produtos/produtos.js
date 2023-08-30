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

// let cadeiraComfy = new Produtos(1, "Cadeira Comfy", "../imagem/produtos/cadeira-comfy/cadeira-comfy.png", "cadeira", 1490.90, 16, false);

// cadeiraComfy.tela()

const produtos = [{
    id: 1,
    imagem: '<img src="../produtos/cadeira-comfy/imagem/cadeira-comfy.png">',
    nome: "Cadeira Comfy",
    categoria: "cadeira",
    link: "cadeira-comfy",
    preço: 1490,
    estoque: 16,
    vendido: false
},
{
    id: 2,
    imagem: '<img src="../produtos/sofa-outline/imagem/sofa-outline.png">',
    nome: "Sofa Outline",
    categoria: "sofa",
    link: "sofa-outline",
    preço: 6390,
    estoque: 8,
    vendido: false
},
{
    id: 3,
    imagem: '<img src="../produtos/sofa-phillip/imagem/sofa-phillip.png">',
    nome: "Sofa Phillip",
    categoria: "sofa",
    link: "sofa-phillip",
    preço: 4190,
    estoque: 3,
    vendido: false
},
{
    id: 4,
    imagem: '<img src="../produtos/cadeira-quad/imagem/cadeira-quad.png">',
    nome: "Cadeira Quad",
    categoria: "cadeira",
    link: "cadeira-quad",
    preço: 1860,
    estoque: 15,
    vendido: false
},
{
    id: 5,
    imagem: '<img src="../produtos/banco-hans/imagem/banco-hans.png">',
    nome: "Banco Hans",
    categoria: "banco",
    link: "banco-hans",
    preço: 780,
    estoque: 3,
    vendido: false
},
{
    id: 6,
    imagem: '<img src="../produtos/escrivaninha-copa/imagem/escrivaninha-copa.png">',
    nome: "Escrivaninha Copa",
    categoria: "escrivaninha",
    link: "escrivaninha-copa",
    preço: 3560,
    estoque: 5,
    vendido: false
},
{
    id: 7,
    imagem: '<img src="../produtos/mesa-apoio-cergle/imagem/mesa-apoio-cergle.png">',
    nome: "Mesa de Apoio Cergle",
    categoria: "mesa",
    link: "mesa-apoio-cergle",
    preço: 5130,
    estoque: 8,
    vendido: false
},
{
    id: 8,
    imagem: '<img src="../produtos/mesa-apoio-creation/imagem/mesa-apoio-creation.png">',
    nome: "Mesa de Apoio Creation",
    categoria: "mesa",
    link: "mesa-apoio-creation",
    preço: 4890,
    estoque: 11,
    vendido: false
},
{
    id: 9,
    imagem: '<img src="../produtos/poltrona-silva/imagem/poltrona-silva.png">',
    nome: "Poltrona Silva",
    categoria: "poltrona",
    link: "poltrona-silva",
    preço: 7550,
    estoque: 7,
    vendido: false
}
];

for (const produto of produtos) {
    let container = document.createElement("div");
    container.classList.add("produtosLayout")

    container.innerHTML = `<h3>${produto.nome}</h3>
                            <a href="${produto.link}/${produto.link}.html">${produto.imagem}</a>
                            <p> $ ${produto.preço}</p>
                            <p> Restam apenas ${produto.estoque} unidades deste produto!</p> `;
    document.body.appendChild(container);
}
