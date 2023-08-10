let nome = document.getElementById("nome")

function inscrever() {
    console.log(nome.value)
    alert("Parabéns, " + nome.value + ", sua inscrição foi efetuada com sucesso!")
}

// --------------------------------------------------------------------------------------------------------

let countEl = document.getElementById("count-el")

let count = 0

let valor = document.getElementById("valor")

function increment() {
    count += 1
    countEl.innerText = count + " = "
}

function decrement() {
    count -= 1
    countEl.innerText = count + " = "
    valor == valor - valor
}


