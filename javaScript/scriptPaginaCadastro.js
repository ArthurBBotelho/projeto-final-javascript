//pegar dados do html
    let primeiroNome = document.getElementById('primeiroNome');
    let segundoNome = document.getElementById('segundoNome');
    let email = document.getElementById('email');
    let endereco = document.getElementById('endereco');
    let numero = document.getElementById('numero')
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


    //valida se os formulários estão preenchidos e apresenta com a biblioteca SweetAlert
    if (primeiroNome.value && segundoNome.value && email.value && telefone.value && endereco.value && senha.value != undefined) {
        
    //Usanso API JSONPlaceholder
    fetch('http://localhost:3000/cadastroUsuarios', {
        method: 'POST',
        body: JSON.stringify({
           'primeiroNome': primeiroNome.value,
           'segundoNome': segundoNome.value,
           'email': email.value,
           'telefone': telefone.value,
           'cep': cep.value,
           'endereco': endereco.value,
           'numero': numero.value,
           'senha': senha.value
       }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json());
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cadastro realizado com sucesso!',
            background: '#f1f4de',
            showConfirmButton: false,
            timer: 1500
            })

            // setTimeout( () =>{
                window.location.href = "../index.html"
            // }, 1000)
    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Preencha seus dados!',
            background: '#f1f4de',
            showConfirmButton: false,
            timer: 1500
            }) 
    }

    //salvando o nome do usuário recem cadastrado no localStorage
   localStorage.setItem("salvarNomeUsuario", JSON.stringify(primeiroNome.value));
   //pedindo para alterar a div criada vazia na index e colocar o nome salvo do localStoraga
   document.getElementById("nomeUsuario").innerHTML = "Olá, " + primeiroNome.value;
   //definindo 1 segundo de tempo para o usuario ver a mensagem positiva e mandar o usuário para a index  
}