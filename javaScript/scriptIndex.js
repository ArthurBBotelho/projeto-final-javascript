let pegaNomeUsuario = JSON.parse(localStorage.getItem("salvarNomeUsuario"));
console.log(pegaNomeUsuario)
document.getElementById("nomeUsuario").innerHTML = "Olá, " + pegaNomeUsuario;
