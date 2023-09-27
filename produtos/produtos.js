const produtos = [{
    id: 1,
    imagem: '<img src="../produtos/cadeira-comfy/imagem/cadeira-comfy.png">',
    nome: "Cadeira Comfy",
    categoria: "cadeira",
    link: "cadeira-comfy",
    price: 1490,
    estoque: 16,
    vendido: false
},
{
    id: 2,
    imagem: '<img src="../produtos/sofa-outline/imagem/sofa-outline.png">',
    nome: "Sofa Outline",
    categoria: "sofa",
    link: "sofa-outline",
    price: 6390,
    estoque: 8,
    vendido: false
},
{
    id: 3,
    imagem: '<img src="../produtos/sofa-phillip/imagem/sofa-phillip.png">',
    nome: "Sofa Phillip",
    categoria: "sofa",
    link: "sofa-phillip",
    price: 4190,
    estoque: 3,
    vendido: false
},
{
    id: 4,
    imagem: '<img src="../produtos/cadeira-quad/imagem/cadeira-quad.png">',
    nome: "Cadeira Quad",
    categoria: "cadeira",
    link: "cadeira-quad",
    price: 1860,
    estoque: 15,
    vendido: false
},
{
    id: 5,
    imagem: '<img src="../produtos/banco-hans/imagem/banco-hans.png">',
    nome: "Banco Hans",
    categoria: "banco",
    link: "banco-hans",
    price: 780,
    estoque: 3,
    vendido: false
},
{
    id: 6,
    imagem: '<img src="../produtos/escrivaninha-copa/imagem/escrivaninha-copa.png">',
    nome: "Escrivaninha Copa",
    categoria: "escrivaninha",
    link: "escrivaninha-copa",
    price: 3560,
    estoque: 5,
    vendido: false
},
{
    id: 7,
    imagem: '<img src="../produtos/mesa-apoio-cergle/imagem/mesa-apoio-cergle.png">',
    nome: "Mesa de Apoio Cergle",
    categoria: "mesa",
    link: "mesa-apoio-cergle",
    price: 5130,
    estoque: 8,
    vendido: false
},
{
    id: 8,
    imagem: '<img src="../produtos/mesa-apoio-creation/imagem/mesa-apoio-creation.png">',
    nome: "Mesa de Apoio Creation",
    categoria: "mesa",
    link: "mesa-apoio-creation",
    price: 4890,
    estoque: 11,
    vendido: false
},
{
    id: 9,
    imagem: '<img src="../produtos/poltrona-silva/imagem/poltrona-silva.png">',
    nome: "Poltrona Silva",
    categoria: "poltrona",
    link: "poltrona-silva",
    price: 7550,
    estoque: 7,
    vendido: false
}
];

for (const produto of produtos) {
    let container = document.createElement("div");
    container.classList.add("produtosLayout")

    container.innerHTML = `<h3>${produto.nome}</h3>
                            <a href="${produto.link}/${produto.link}.html">${produto.imagem}</a>
                            <p id="price">R$ ${produto.price}</p>
                            <p> Restam apenas ${produto.estoque} unidades deste produto!</p>
                            <button id="adicionarCarrinho">Adicionar ao Carrinho</button>
                            <button id="comprarAgora">Comprar Agora</button>`;
    document.getElementById("produtos").appendChild(container);

}

// função para criar um novo elemento genérico 
/* const createCustomElement = (element, id, innerText, href) => {
    const e = document.createElement(element);
    e.id = id;
    e.innerText = innerText;
    if (element == 'button') {
      e.addEventListener('click', addProductsToCart);
    }
    return e;
  };
*/
// --------------------------------------------------------------- CARRINHO

const carrinho = []

let arrayCarrinho = document.querySelectorAll("#adicionarCarrinho")
console.log(arrayCarrinho)
let dialogCarrinho = document.querySelector("#carrinhoModal")


function adicionarProduto() {
    const nome = this.parentElement.childNodes[0].innerText

    const price = this.parentElement.childNodes[4].innerText

    carrinho.push({ nome, price })
    console.log(carrinho)

    // let nomeProduto = document.createElement("span")
    // nomeProduto.innerHTML = `<p>${nome}<p/>`
    // dialogCarrinho.appendChild(nomeProduto)

    somaCarrinho()
}

function somaCarrinho() {
    let resultadoCarrinho = 0

    for (const price of carrinho) {
        resultadoCarrinho += parseInt(price.price)
    }
    console.log("Valor do Carrinho: " + resultadoCarrinho)

}

for (i = 0; i < arrayCarrinho.length; i++) {
    arrayCarrinho[i].addEventListener('click', adicionarProduto)
}

let carrinhoModal = document.getElementById('carrinho')

document.getElementById('iconeCarrinho').onclick = function botaoCarrinho(e) {
    e.preventDefault()
    console.log("Usuário abriu carrinho")
    carrinhoModal.showModal();
    //pegando o botão fechar de dentro do dialog e fechando com o onclick
    document.getElementById('btnFechar').onclick = function botaoFechar(e) {
        e.preventDefault()
        console.log("fechar")
        carrinhoModal.close();
        for (i = 0; i < carrinho.length; i++) {
            console.log("hello")
        }

    }
}
// let fazerLogin = document.getElementById('fazerLogin')
// //pegando o botão e abrindo o dialog com o onclick
// document.getElementById('iconeLogin').onclick = function botaoLogin(e) {
//     e.preventDefault()
//     console.log("hello")
//     fazerLogin.showModal();
// }

//------------------------------------------------------SCRIPT DIALOG LOGIN
//div onde está o html do dialog
let fazerLogin = document.getElementById('fazerLogin')
//pegando o botão e abrindo o dialog com o onclick
document.getElementById('iconeLogin').onclick = function botaoLogin(e) {
    e.preventDefault()
    console.log("hello")
    fazerLogin.showModal();
}

//pegando o botão fechar de dentro do dialog e fechando com o onclick
document.getElementById('btnFechar').onclick = function botaoFechar(e) {
    e.preventDefault()
    console.log("fechar")
    fazerLogin.close();
}