document.getElementById("butonLogin").addEventListener("click", function(){ alert("Hello World!"); })

//REALIZANDO O CADSTRO DENTRO DO ARRAY
let cadastro = []
//pedindo dados para o usari
//função para criar a pessoa

function adicionaPessoa(nome, senha, email){
    this.nome = nome;
//    this.senha = senha;
  //  this.email = email;
}
//adicionando uma pessoa e pedindo dados ao usuário
const novaPessoa = new adicionaPessoa(prompt("Digite Seu Nome")//prompt("Digite Sua senha"), prompt("Digite seu E-mail")
);
console.log(novaPessoa)

//função para acrscentar essas pessoas em um array
cadastro.push(novaPessoa);

//reotornar "cadastro realizado com sucesso"
alert("Cadastro realizado com sucesso!")

//acessar esses dados dentro do array cadastro e comparar se a senha é igual ao nome

let nomeUsuario = prompt("Digite seu e-mail");
//emilylet inserirSenha = prompt("Digite a sua senha");

for (const adicionaPessoa of cadastro){
    if (nomeUsuario == adicionaPessoa.nome) {
        console.log("email certo")
        
    } else { console.log("email errado")   
    }
}



