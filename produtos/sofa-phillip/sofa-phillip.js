(function () {
    var adicionarCarrinho = document.getElementById("adicionarCarrinho");
    var cancelButton = document.getElementById("cancel");
    var carrinho = document.getElementById("carrinho");

    // O botão Update abre uma Dialog
    adicionarCarrinho.addEventListener("click", function () {
        carrinho.showModal();
    });

    // O botão cancelButtom fecha uma Dialog
    cancelButton.addEventListener("click", function () {
        carrinho.close();
    });
})();