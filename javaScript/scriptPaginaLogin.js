// // pega o array de objetos do localStoreage - aula 10
// let cadastroUsuario = JSON.parse(localStorage.getItem("cadastroUsuario"))
// console.log(cadastroUsuario)

document.getElementById("buttonLogin").onclick = function getLogin(e) {
    e.preventDefault();
    //pegando elementos do HTML
    let inputUserName = document.getElementById("inputUserName").value;
    let inputPassword = document.getElementById("inputPassword").value;
    
//percorre o array de objetos procurando o mesmo texto do input
   fetch('http://localhost:3000/cadastroUsuarios')
  .then((response) => response.json())
  .then((data) => {
        for (let i = 0; i <= data.length; i++) {
            console.log(inputUserName)
            // && inputPassword == data[i].senha
            if(inputUserName || inputPassword == ""){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Preencha seus dados!',
                    background: '#f1f4de',
                    timer: 1000,
                    showConfirmButton: false
                })
            }
            if (inputUserName == data[i].email && inputPassword == data[i].senha) {
                localStorage.setItem("salvarNomeUsuario", JSON.stringify(data[i].primeiroNome));
                console.log(data[i].primeiroNome)
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
              break
             }
            if(inputUserName != data[i].email){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'E-mail não cadastrado!',
                    background: '#f1f4de',
                    timer: 1000,
                    showConfirmButton: false
                });
            }
        } 
    })
}
//    if (loginOk == true) {
//         Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Bem vindo!',
//         background: '#f1f4de',
//         timer: 1000,
//         showConfirmButton: false,
//         })
//         setTimeout( () =>{
//             window.location.href = "../index.html"
//         }, 1000)
//    }
//    else {
//       document.getElementById("erroCadastro").innerHTML = "verifique e-mail e senha"
//    }