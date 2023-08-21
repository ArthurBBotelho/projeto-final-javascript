document.getElementById("butonLogin").addEventListener("click", function(){ alert("Hello World!"); })


//fazer a tela de cadastro igual a vitória do lig4, com fundo embassado....


//REALIZANDO O CADSTRO DENTRO DO ARRAY
//pedindo dados para o usari
//função para criar a pessoa
class adicionaPessoa {
    constructor(nome, senha) {
        //tornar tudo maiusculo
        this.nome = nome.toUpperCase();
        //tornar numero inteiro
        this.senha = senha;
        // this.email = email;
    }
}

//adicionando uma pessoa e pedindo dados ao usuário
let cadastro = [];
//const novaPessoa = new adicionaPessoa(prompt("Digite Seu Nome para o Cadastro"), prompt("Digite Sua senha"), prompt("Digite seu E-mail"));
let novaPessoa = new adicionaPessoa(prompt("Digite Seu Nome para o Cadastro"), prompt("Digite Sua senha"));
if (novaPessoa !=""){    
    alert("Cadastro realizado com sucesso!")
}
    else{alert("Digite um nome");
    }

cadastro.push(novaPessoa)
console.log(cadastro)


//função para validar se usuário digitou os dados no cadastro

//determina variaveis para captar usuario e senha agtravés de prompt
let nomeUsuario = prompt("Digite seu nome para fazer login").toUpperCase()
let inserirSenha = prompt("Digite a sua senha");

//percorre o array cadastro e pega um dos itens do contrutor
for (const nome of cadastro){ 
        console.log(nome.nome)
        console.log(nome.senha)

        if((nome.nome === nomeUsuario) && (nome.senha === inserirSenha)) {
            alert("Seus dados estão corretos")
        }
        else{ alert("Dados não são iguais")
        }
    }