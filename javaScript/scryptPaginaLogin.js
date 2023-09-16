
//pegar os dados salvos no localstorage e fazer verificação se o usuário existe e validar.
//Aula 10


// pega o array de objetos do localStoreage


//percorre o array de objetos procurando o mesmo texto do input

//achou o texto igual e comparar se email e senha digitados são iguais

//aparece as mensagens confirmando ou não.

//         if((nome.nome === nomeUsuario) && (nome.senha === inserirSenha)) {
//             alert("Seus dados estão corretos")
//         }
//         else{ alert("Dados não são iguais")
//         }
//     }


//div onde está o html do dialog
let fazerLogin = document.getElementById('fazerLogin')

document.getElementById('iconeLogin').onclick = function botaoLogin (e) {
    e.preventDefault()
    console.log("hello")
    fazerLogin.showModal();
}

document.getElementById('btnFechar').onclick = function botaoFechar (e) {
    e.preventDefault()
    console.log("fechar")
    fazerLogin.close();
}