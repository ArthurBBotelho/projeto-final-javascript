// ----------------------------------------------------INSCRIÇÃO NEWSLETTER

let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let form = document.querySelector("#form");
const botton = document.querySelector("#bottonNewsLetter");

form.addEventListener("submit", newsLetter)

function newsLetter(e) {
    e.preventDefault();
    if (nome == "") {
        alert("Preencha seu nome.");
        return;
    }
    if (email == "" || !validEmail(email.value)) {
        alert("Preencha um e-mail valido.");
        return;
    }
    alert("Inscrição realizada com sucesso!");
    form.submit();
}

function validEmail(email) {
    const emailRegex = new RegExp(
        /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,}$/
    )
    if (emailRegex.test(email)) {
        return true
    }
    return false
}

// ----------------------------------------------------INCREMENTO PRODUTO

let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function decrement() {
    count -= 1
    countEl.innerText = count

}

// ----------------------------------------------------PRODUTO

const produtos = [{
    id: 1,
    imagem: "imagem/produtos/outline-sofa/outline-sofa.png",
    produto: "Cadeira Comfy",
    categoria: "cadeira",
    preço: 1490.90,
    estoque: 16,
    vendido: false
},
{
    id: 2,
    imagem: "imagem/produtos/sofa-phillip/sofa-phillip.png",
    produto: "Sofa Outline",
    categoria: "sofa",
    preço: 6390.90,
    estoque: 8,
    vendido: false
},
{
    id: 3,
    imagem: "imagem/produtos/cadeira-comfy/cadeira-confy.jpg",
    produto: "Sofa Phillip",
    categoria: "sofa",
    preço: 4190.90,
    estoque: 3,
    vendido: false
},
{
    id: 4,
    imagem: "imagem/produtos/cadeira-quad/cadeira-quad.jpg",
    produto: "Cadeira Quad",
    categoria: "cadeira",
    preço: 1860.90,
    estoque: 15,
    vendido: false
}];

produtos.sort((a, b) => {
    if (a.produto > b.produto) {
        return 1;
    }
    if (a.produto < b.produto) {
        return -1;
    }
    return 0;
})

console.log(produtos)

// ------------------------------------------------------------------SEARCH


function search() {
    let buscaUser = prompt("Faça sua busca: ")
    const buscaProduto = produtos.filter((o) => o.produto.toUpperCase().includes(buscaUser.toUpperCase()))
    console.log(buscaProduto)
}



