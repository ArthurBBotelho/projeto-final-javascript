//fazer a tela de cadastro igual a vitória do lig4, com fundo embassado....


//REALIZANDO O CADSTRO DENTRO DO ARRAY

//função para criar a pessoa
class adicionaPessoa {
    constructor(nome, senha) {
        //tornar tudo maiusculo
        this.nome = nome
        //tornar numero inteiro
        this.senha = senha;
        // this.email = email;
    }
}
//adicionando uma pessoa e pedindo dados ao usuário
let cadastro = [];

//para fazer o login recuoeramos os dados no local storage com JSON.parse

document.getElementById('getLoginButton').onclick = function btnCadastro(e) {
    e.preventDefault();
    //pegar dados do html
    let userName = document.getElementById('inputUsername').value;
    let userPassword = document.getElementById('inputPassword').value;
    
    //usar os dados para criar uma nova pessoa
    let novaPessoa = new adicionaPessoa(userName, userPassword)
    
    //salvar a nova pessoa no array
    cadastro.push(novaPessoa)
    //salvar esse array no localstorage
    localStorage.setItem("cadastroUsuário", JSON.stringify(cadastro))

    //limpar formulário após cadastro
    document.getElementById('inputUsername').value = ""
    document.getElementById('inputPassword').value = ""

    const cadastrado = document.createElement("p");
    cadastrado.innerHTML = "Cadastro realizado com sucesso!"
    document.getElementById('divCadastrado').appendChild(cadastrado);
    console.log(userPassword)



}
    
//pegar os dados salvos no localstorage e fazer verificação se o usuário existe e validar.
//Aula 10
//percorre o array cadastro e pega um dos itens do contrutor
// for (const nome of cadastro){ 
//         console.log(nome.nome)
//         console.log(nome.senha)

//         if((nome.nome === nomeUsuario) && (nome.senha === inserirSenha)) {
//             alert("Seus dados estão corretos")
//         }
//         else{ alert("Dados não são iguais")
//         }
//     }
