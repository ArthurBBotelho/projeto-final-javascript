let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let form = document.querySelector("#form");


form.addEventListener("submit", newsLetter);

function newsLetter(e) {
    e.preventDefault();
    if (nome == "") {
        Swal.fire({
            title: "Newsletter",
            text: "Preencha seu nome",
            icon: "error",
            confirmButtonText: "Ok"
        });
    }
    if (email == "" || !validEmail(email.value)) {
        Swal.fire({
            title: "Newsletter",
            text: "Preencha um e-mail valido.",
            icon: "error",
            confirmButtonText: "Ok"
        });
    }else {
    Swal.fire({
        title: "Newsletter",
        text: "Sua incrição foi realizada com sucesso!",
        icon: "success",
        confirmButtonText: "Ok"
    });
    }
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

// ----------------------------------------------------PRODUTO

// const produtos = [{
//     id: 3,
//     imagem: "imagem/produtos/cadeira-comfy/cadeira-confy.jpg",
//     produto: "Sofa Phillip",
//     categoria: "sofa",
//     preço: 4190.90,
//     estoque: 3,
//     vendido: false
// },
// {
//     id: 4,
//     imagem: "imagem/produtos/cadeira-quad/cadeira-quad.jpg",
//     produto: "Cadeira Quad",
//     categoria: "cadeira",
//     preço: 1860.90,
//     estoque: 15,
//     vendido: false
// }];

function organizaProdutos() {
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
}

organizaProdutos()

// ------------------------------------------------------------------SEARCH


function search() {
    let buscaUser = prompt("Faça sua busca: ")
    const buscaProduto = produtos.filter((o) => o.produto.toUpperCase().includes(buscaUser.toUpperCase()))
    console.log(buscaProduto)
}

//---------------------------------------------------------------NOME DE USUÁRIO LOGADO
let pegaNomeUsuario = JSON.parse(localStorage.getItem("salvarNomeUsuario"));
console.log(pegaNomeUsuario)
if (pegaNomeUsuario == null) {

} else {
    document.getElementById("nomeUsuario").innerHTML = "Olá, " + pegaNomeUsuario;
    console.log(pegaNomeUsuario)
}

//-----------------------------------------------------------------abrir e fechar DIALOG
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