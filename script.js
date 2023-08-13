// ----------------------------------------------------INSCRIÇÃO NEWSLETTER

let nome = document.getElementById("nome")
let email = document.getElementById("email")

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
    construtor(id, nome, categoria, preço, estoque, vendido) {
        this.id = parseInt(id);
        this.nome = nome;
        this.categoria = categoria;
        this.preço = parseFloat(preço);
        this.estoque = parseInt(estoque);
        this.vendido = false;
    }

    telaNome() {
        console.log(this.nome)
    }
}

const produto1 = new Produto(1, "Cadeira Comfy", "cadeira", 1490.90, 16)
const produto2 = new Produto(2, "Sofa line", "sofa", 6390, 90, 8)

produto1.telaNome()
