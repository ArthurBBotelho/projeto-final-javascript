// ----------------------------------------------------INSCRIÇÃO NEWSLETTER

let nome = document.getElementById("nome")

function inscrever() {
    console.log(nome.value)
    alert("Parabéns, " + nome.value + ", sua inscrição foi efetuada com sucesso!")
}

// ----------------------------------------------------INCREMENTO PRODUTO

let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function decrement() {
    count -= 1
    countEl.innerText = count

}

// ----------------------------------------------------PRODUTO

class Produto {
    construtor(nome, categoria, preço, estoque, vendido) {
        this.nome = nome;
        this.categoria = categoria;
        this.preço = parseFloat(preço);
        this.estoque = parseInt(estoque);
        this.vendido = false;
    }
}
