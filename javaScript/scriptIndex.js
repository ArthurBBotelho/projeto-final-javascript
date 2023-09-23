let pegaNomeUsuario = JSON.parse(localStorage.getItem("salvarNomeUsuario"));

if (pegaNomeUsuario == null) {
    
}else {
    document.getElementById("nomeUsuario").innerHTML = "Olá, " + pegaNomeUsuario;
    console.log(pegaNomeUsuario)
}