//pegar dados do html
    let primeiroNome = document.getElementById('primeiroNome');
    let segundoNome = document.getElementById('segundoNome');
    let email = document.getElementById('email');
    let endereco = document.getElementById('endereco');
    let senha = document.getElementById('senha');

    //validando o que o usuário está digitando está correto
    senha.addEventListener("keyup", () => {
        if (senha.value.length < 5 ) {
            senha.setAttribute("style", "border-color: #e07a5f")

        } else {
            senha.setAttribute("style", "border-color: #46725d")
        }
    })
//função com evento de clique de botão 
document.getElementById('enviarCadastro').onclick = function btnCadastro(e) {
    e.preventDefault();
    //cria a variavel cadastro e nela pega o cadastro do localstorage ou se não tiver cria um novo
    let cadastro = JSON.parse(localStorage.getItem("cadastroUsuario") || '[]')
    //salvar a pessoa no array
    cadastro.push(
        {
        primeiroNome: primeiroNome.value,
        segundoNome: segundoNome.value,
        email: email.value,
        telefone: telefone.value,
        endereco: endereco.value,
        senha: senha.value
        }
    )
    //mostrando a nova pessoa asicionada no cadastro
    console.log(cadastro)
    //salvar esse array no localstorage
    localStorage.setItem("cadastroUsuario", JSON.stringify(cadastro));
    
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
   localStorage.setItem("salvarNomeUsuario", JSON.stringify(primeiroNome.value));
   console.log(primeiroNome.value)
   document.getElementById("nomeUsuario").innerHTML = "Olá, " + primeiroNome.value;
   setTimeout( () =>{
       window.location.href = "../index.html"
   }, 1000)
}

