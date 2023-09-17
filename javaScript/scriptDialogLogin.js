//div onde está o html do dialog
let fazerLogin = document.getElementById('fazerLogin')
//pegando o botão e abrindo o dialog com o onclick
document.getElementById('iconeLogin').onclick = function botaoLogin (e) {
    e.preventDefault()
    console.log("hello")
    fazerLogin.showModal();
}

//pegando o botão fechar de dentro do dialog e fechando com o onclick
document.getElementById('btnFechar').onclick = function botaoFechar (e) {
    e.preventDefault()
    console.log("fechar")
    fazerLogin.close();
}