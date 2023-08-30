// let cliente = prompt("Olá, adoramos conhecer nossos clientes! Por favor digite o seu primeiro nome: ")

// alert(cliente + " trabalhamos para proporcionar a melhor experiência, xxxxx")


/*const botao = document.getElementById('btn');

botao.addEventListener('click', () => {

    const resposta = alert('Obrigado! Sua opinião é muito valiosa!');
            
            // Verifica se a resposta não é nula (quando o usuário clica em "Cancelar")
        if (resposta !== null) {
            alert('Você digitou: ' + resposta);
        } else {
            alert('Você cancelou o prompt.');
}
});*/

const botao = document.getElementById('btn');

botao.addEventListener('click', () => {

    const nome = document.getElementById('nome').value;

    if (nome === '') {
        alert('Por favor, preencha todos os campos antes de prosseguir.');
        return;
    }

    const resposta = alert('Obrigado! Sua opinião é muito valiosa!');

});
