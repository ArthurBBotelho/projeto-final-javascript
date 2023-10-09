// // pega o array de objetos do localStoreage - aula 10
// let cadastroUsuario = JSON.parse(localStorage.getItem("cadastroUsuario"))
// console.log(cadastroUsuario)

document.getElementById("buttonLogin").onclick = function getLogin(e) {
    e.preventDefault();
    //pegando elementos do HTML
    let inputUserName = document.getElementById("inputUserName").value;
    let inputPassword = document.getElementById("inputPassword").value;
    let loginOk = false
    
//percorre o array de objetos procurando o mesmo texto do input
   fetch('http://localhost:3000/cadastroUsuarios')
  .then((response) => response.json())
  .then((data) => {
     console.log(data) 
        for (let i = 0; i <= data.length; i++) {
            console.log(data.length);
            console.log(inputUserName)
            if (inputUserName == data[i].email && inputPassword == data[i].senha) {
                let loginOk = true
                //seleciona a div ao lado do carrinho para aparecer o nome do usuário salvo no cadastro
                localStorage.setItem("salvarNomeUsuario", JSON.stringify(data.primeiroNome));   
            }
            else {
            inputUserName != data[i].email

            Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'E-mail não cadastrado!',
            background: '#f1f4de',
            timer: 1000,
            showConfirmButton: false
            });
             return
            }
        }
    })

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