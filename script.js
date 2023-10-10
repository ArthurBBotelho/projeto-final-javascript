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

//---------------------------------------------------------------NOME DE USUÁRIO LOGADO
//pegando o nome do loocal storage
let pegaNomeUsuario = JSON.parse(localStorage.getItem("salvarNomeUsuario"));
// caso não tenha nenhum nome salvo no local storage não faz nada
if (pegaNomeUsuario == null) {
//senão mostra o nome da pessoa
} else {
    document.getElementById("nomeUsuario").innerHTML = "Olá, " + pegaNomeUsuario;
}

//-----------------------------------------------------------------abrir e fechar DIALOG
//div onde está o html do dialog
let fazerLogin = document.getElementById('fazerLogin')

// pegando o botão e abrindo o dialog com o onclick
document.getElementById('iconeLogin').onclick = function abrirModal(e) {
    e.preventDefault();
    fazerLogin.showModal();
}
//pegando o botão fechar de dentro do dialog e fechando com o onclick
document.getElementById('btnFechar').onclick = function botaoFechar(e) {
    e.preventDefault();
    fazerLogin.close();
}
