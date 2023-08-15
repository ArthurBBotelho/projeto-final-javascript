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

const produtos = [{
    id: 1,
    imagem: "imagem/produtos/outline-sofa/outline-sofa.png",
    produto: "Cadeira Comfy",
    categoria: "cadeira",
    preço: 1490.90,
    estoque: 16,
    vendido: false
},
{
    id: 2,
    imagem: "imagem/produtos/sofa-phillip/sofa-phillip.png",
    produto: "Sofa Outline",
    categoria: "sofa",
    preço: 6390.90,
    estoque: 8,
    vendido: false
},
{
    id: 3,
    imagem: "imagem/produtos/cadeira-comfy/cadeira-confy.jpg",
    produto: "Sofa Phillip",
    categoria: "sofa",
    preço: 4190.90,
    estoque: 3,
    vendido: false
}];

function produtosTela() {
    for (const produto of produtos) {

        function compare(a, b) {
            if (a.preço < b.preço)
                return -1;
            if (a.preço > b.preço)
                return 1;
            return 0;
        }
    }
    console.log("Preço do menor para o maior" + produtos)
}
produtosTela()
