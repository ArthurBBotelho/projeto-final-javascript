//pegar dados do html
    let primeiroNome = document.getElementById('primeiroNome');
    let segundoNome = document.getElementById('segundoNome');
    let email = document.getElementById('email');
    let endereco = document.getElementById('endereco');
    let senha = document.getElementById('senha');
    let cep = document.getElementById('cep');

    //validando o que o usuário está digitando está correto
    senha.addEventListener("keyup", () => {
        if (senha.value.length < 5 ) {
            //fica verde
            senha.setAttribute("style", "border-color: #e07a5f")
        } else {
            //fica laranja
            senha.setAttribute("style", "border-color: #46725d")
        }
    })
    email.addEventListener("keyup", (inputEmail) => {
        let emailRegex = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,}$/); 
        if (emailRegex.test(inputEmail)) {
            email.setAttribute("style", "border-color: #e07a5f")
        }
        else{  email.setAttribute("style", "border-color: #46725d")
        }
    })
//função com evento de clique de botão 
document.getElementById('enviarCadastro').onclick = function btnCadastro(e) {
    e.preventDefault();

    //cria a variavel cadastro e nela pega o cadastro do localstorage ou se não tiver cria um novo
    // let cadastro = JSON.parse(localStorage.getItem("cadastroUsuario") || '[]')
    //salvar a pessoa no array
    // cadastro.push(
    //     {
    //     primeiroNome: primeiroNome.value,
    //     segundoNome: segundoNome.value,
    //     email: email.value,
    //     telefone: telefone.value,
    //     endereco: endereco.value,
    //     senha: senha.value
    //     }
    // )

    //Usanso API JSONPlaceholder
    fetch('https://my-json-server.typicode.com/ArthurBBotelho/projeto-final-javascript/profile', { 
        method: 'PUT',
        body: JSON.stringify({
           primeiroNome: primeiroNome.value,
           segundoNome: segundoNome.value,
           email: email.value,
           telefone: telefone.value,
           endereco: endereco.value,
           senha: senha.value
       }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

    // //salvar esse array no localstorage
    // localStorage.setItem("cadastroUsuario", JSON.stringify(cadastro));
    
    //valida se os formulários estão preenchidos e apresenta com a biblioteca SweetAlert
    if (primeiroNome && segundoNome && email && telefone && endereco && senha != "") {
       Swal.fire({
           position: 'center',
           icon: 'success',
           title: 'Cadastro realizado com sucesso!',
           background: '#f1f4de',
           showConfirmButton: false,
           })
        } else {
            Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Complete seu cadastro!',
            timer: 1000,
            background: '#f1f4de',
            showConfirmButton: false,
       }) 
   }
   //salvando o nome do usuário recem cadastrado no localStorage
   localStorage.setItem("salvarNomeUsuario", JSON.stringify(primeiroNome.value));
   //pedindo para alterar a div criada vazia na index e colocar o nome salvo do localStoraga
   document.getElementById("nomeUsuario").innerHTML = "Olá, " + primeiroNome.value;
   //definindo 1 segundo de tempo para o usuario ver a mensagem positiva e mandar o usuário para a index
   setTimeout( () =>{
       window.location.href = "../index.html"
   }, 1000)
  
}

