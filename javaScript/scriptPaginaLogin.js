
//pegar os dados salvos no localstorage e fazer verificação se o usuário existe e validar.
//Aula 10


// pega o array de objetos do localStoreage

let cadastroUsuario = JSON.parse(localStorage.getItem("cadastroUsuario"))
console.log(cadastroUsuario)

document.getElementById("buttonLogin").onclick = function getLogin(e) {
    e.preventDefault();
    //pegando elementos do HTML
    let inputUserName = document.getElementById("inputUserName").value;
    let inputPassword = document.getElementById("inputPassword").value;
    let loginOk = false
    console.log(e.target)
//percorre o array de objetos procurando o mesmo texto do input
for (let  dados of cadastroUsuario) {
    if (inputUserName == dados.email && inputPassword == dados.senha) {
        loginOk = true
        //seleciona a div ao lado do carrinho para aparecer o nome do usuário salvo no cadastro
        localStorage.setItem("salvarNomeUsuario", JSON.stringify(dados.primeiroNome));   
    }
}
    if (loginOk == true) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bem vindo!',
            background: '#f1f4de',
            timer: 1000,
            showConfirmButton: false,
            })
            setTimeout( () =>{
                window.location.href = "../index.html"
            }, 1000)
    }
    else {
       document.getElementById("erroCadastro").innerHTML = "verifique e-mail e senha"
    }
}

