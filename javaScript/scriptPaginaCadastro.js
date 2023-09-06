
//criando uma pessoa
class adicionaPessoa {
    constructor(nomeCompleto, email, telefone, endereco, senha) {
        //tornar tudo maiusculo
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.senha = senha;
    }
}
//array de pessoas cadastradas
let cadastro = [];

//para fazer o login recuperamos os dados no local storage com JSON.parse

//função com evento de clique de botão 
document.getElementById('enviarCadastro').onclick = function btnCadastro(e) {
    e.preventDefault();
    //pegar dados do html
    let nomeCompleto = document.getElementById('nomeCompleto').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let endereco = document.getElementById('endereco').value;
    let senha = document.getElementById('senha').value;
    //validar se os formulários estão preenchidos
    //usar os dados para criar uma nova pessoa
    let novaPessoa = new adicionaPessoa (nomeCompleto, email, telefone, endereco, senha)
    
    //salvar a nova pessoa no array
    cadastro.push(novaPessoa)
    console.log(cadastro)
    //salvar esse array no localstorage
    localStorage.setItem("cadastroUsuário", JSON.stringify(cadastro));
    
    nomeCompleto && email && telefone && endereco && senha != "" ?
    Swal.fire({
        position: 'center',
                icon: 'error',
                title: 'Complete seu cadastro!',
                timer: 1500,
                background: '#f1f4de'
        }) : Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Complete seu cadastro!',
                timer: 1500,
                background: '#f1f4de'
            })
    }
   
