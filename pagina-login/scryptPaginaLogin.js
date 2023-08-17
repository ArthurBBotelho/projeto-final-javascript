document.getElementById("butonLogin").addEventListener("click", function(){ alert("Hello World!"); })


//fazer a tela de cadastro igual a vitória do lig4, com fundo embassado....


//REALIZANDO O CADSTRO DENTRO DO ARRAY
let cadastro = []
//pedindo dados para o usari
//função para criar a pessoa

function adicionaPessoa(nome, senha, email){
    this.nome = nome;
    //this.senha = senha;
    //  this.email = email;
}
//adicionando uma pessoa e pedindo dados ao usuário
const novaPessoa = new adicionaPessoa(prompt("Digite Seu Nome")//prompt("Digite Sua senha"), prompt("Digite seu E-mail")
);
console.log(novaPessoa)

//função para acrscentar essas pessoas em um arraypagina-login/scryptPaginaLogin.js
cadastro.push(novaPessoa);

//reotornar "cadastro realizado com sucesso"
//função para validar se usuário digitou os dados
if (novaPessoa !== ' '){   // validação errada revisar a aula de validação.... 
    alert("Cadastro realizado com sucesso!")
}
    else{alert("Digite novamente seu nome");
    }

//acessar esses dados dentro do array cadastro e comparar se a senha é igual ao nome e email

let nomeUsuario = prompt("Digite seu nome para fazer login");
//let inserirSenha = prompt("Digite a sua senha");

for (const adicionaPessoa of cadastro){
    if (nomeUsuario == adicionaPessoa.nome) {
        alert("Seus dados estão corretos")
} else { alert("Revise seus dados e tente novamente")   
    }
}