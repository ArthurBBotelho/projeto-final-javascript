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
                            <a>${produto.imagem}</a>
                            <p class="price">${produto.price}</p>
                            <p> Restam apenas ${produto.estoque} unidades deste produto!</p>
                            <button id="adicionarCarrinho">Adicionar ao Carrinho</button>`;
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

// --------------------------------------------------------------------- FUNÇÃO ADICIONAR PRODUTOS NO CARRINHO

function adicionarProduto() {
    const nome = this.parentElement.childNodes[0].innerText

    const price = this.parentElement.childNodes[4].innerText

    const imagem = this.parentElement.childNodes[2].innerHTML

    carrinho.push({ nome, price, imagem })
    console.log(carrinho)

    renderCarrinho(nome, price, imagem)
    somaResultado()
}

//---------------------------------------------------------------------- CONTEÚDO QUE SERÁ EXIBIDO DENTRO DO DIALOG CARRINHO

function renderCarrinho(nome, price, imagem) {
    let nomeProduto = document.createElement("div")
    nomeProduto.classList.add("produtosCarrinho")
    let carrinhoVazio = document.getElementById('carrinhoVazio')

    nomeProduto.innerHTML = `
    <p>${nome}</p>
    <p>Preço: ${price}</p>
    <p>${imagem}</p>
    <hr>
    `
    // <p>Valor do Carrinho: ${resultadoCarrinho}</p>
    if (carrinhoVazio) {
        carrinhoVazio.remove()
    }
    dialogCarrinho.appendChild(nomeProduto)
}

function somaResultado() {
    let resultadoCarrinho = 0
    let resultadoCarrinhoFeito = document.querySelector(".resultadoCarrinhoRender")

    if (resultadoCarrinhoFeito) {
        resultadoCarrinhoFeito.remove()
    }

    for (const price of carrinho) {
        resultadoCarrinho += parseInt(price.price)
    }
    console.log("Valor do Carrinho: " + resultadoCarrinho)

    let resultadoCarrinhoRender = document.createElement("div")
    resultadoCarrinhoRender.classList.add("resultadoCarrinhoRender")
    resultadoCarrinhoRender.innerHTML = `
    <p>Valor do Carrinho: ${resultadoCarrinho}</p>`

    dialogCarrinho.appendChild(resultadoCarrinhoRender)
}


//---------------------------------------------------------------------- ADICIONAR LOCAL STORAGE

let salvarCarrinho = document.getElementById("salvarCarrinho")

salvarCarrinho.addEventListener('click', armazenarCarrinho)

function armazenarCarrinho() {
    const sotrageCarrinho = (chave, valor) => { localStorage.setItem(chave, valor) }

    sotrageCarrinho("carrinhoSalvo", JSON.stringify(carrinho))
}

function carregarCarrinho() {
    const armazenados = JSON.parse(localStorage.getItem("carrinhoSalvo"));
    console.log(armazenados)

    for (const produtos of armazenados) {
        renderCarrinho(produtos.nome, produtos.price, produtos.imagem)
        carrinho.push({ nome: produtos.nome, price: produtos.price, imagem: produtos.imagem })
    }
    somaResultado()
}

// --------------------------------------------------------------------- FUNÇÃO LIMPAR STORAGE

let limparCarrinho = document.getElementById("limparCarrinho")

limparCarrinho.addEventListener('click', limparProdutos)

function limparProdutos() {
    removeItem("carrinhoSalvo")
}

// --------------------------------------------------------------------- FUNÇÃO PARA SOMAR PRODUTOS ADICIONADOS NO CARRINHO

for (i = 0; i < arrayCarrinho.length; i++) {
    arrayCarrinho[i].addEventListener('click', adicionarProduto)
}

// --------------------------------------------------------------------- ABRIR O MODAL CARRINHO

let carrinhoModal = document.getElementById("carrinhoModal")

document.getElementById('iconeCarrinho').onclick = function botaoCarrinho(e) {
    e.preventDefault()
    console.log("Usuário abriu carrinho")
    carrinhoModal.showModal();
}

// --------------------------------------------------------------------- FECHAR O MODAL CARRINHO

document.getElementById('btnFechar').onclick = function botaoFechar(e) {
    e.preventDefault()
    console.log("fechar")
    carrinhoModal.close();
}

window.onload = () => {
    carregarCarrinho()
}