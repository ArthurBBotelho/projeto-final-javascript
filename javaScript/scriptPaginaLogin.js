// pega o array de objetos do localStoreage - aula 10
let cadastroUsuario = JSON.parse(localStorage.getItem("cadastroUsuario"))
console.log(cadastroUsuario)

fetch('http://localhost:3000/cadastroUsuarios')
  .then((response) => response.json())
  .then((json) => console.log(json));

document.getElementById("buttonLogin").onclick = function getLogin(e) {
    e.preventDefault();
    //pegando elementos do HTML
    let inputUsername = document.getElementById("inputUsername").value;
    let inputPassword = document.getElementById("inputPassword").value;
    let loginOk = false
    
//percorre o array de objetos procurando o mesmo texto do input
for (let  dados of cadastroUsuario) {
    if (inputUsername == dados.email && inputPassword == dados.senha) {
        loginOk = true
        //seleciona a div ao lado do carrinho para aparecer o nome do usuário salvo no cadastro
        localStorage.setItem("salvarNomeUsuario", JSON.stringify(dados.primeiroNome));   
    }
   if(inputUsername != dados.email){
    alert("você não possui Cadastro")
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

