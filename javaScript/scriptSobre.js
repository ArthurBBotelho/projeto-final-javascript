window.addEventListener('scroll', () => {
	document
        .querySelector('nav')
		.classList.toggle('window-scroll', window.scrollY > 100);
});



/* -----  BT ------ */

const botao = document.getElementById('btn');

botao.addEventListener('click', () => {

    const nome = document.getElementById('nome').value;

    if (nome === '') {
        alert('Por favor, preencha todos os campos antes de prosseguir.');
        return;
    }

    const resposta = alert('Obrigado! Sua opinião é muito valiosa!');

});