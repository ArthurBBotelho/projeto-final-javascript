document.getElementById("buttonLogin").onclick = function getLogin(e) {
  e.preventDefault();
  //pegando elementos do HTML
  let inputUserName = document.getElementById("inputUserName");
  let inputPassword = document.getElementById("inputPassword");

  //percorre o array de objetos procurando o mesmo texto do input
  fetch("http://localhost:3000/cadastroUsuarios")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i <= data.length; i++) {
        console.log(data);
        // validando se o usuário preencheu os inputs
        if (inputUserName || inputPassword == "") {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Preencha seus dados!",
            background: "#f1f4de",
            timer: 1000,
            showConfirmButton: false,
          });
        }
        //validando o login com o db.JSON
        if (inputUserName == data[i].email && inputPassword == data[i].senha) {
          //salvando o primeiro nome do usuário no localstorage para aparecer na index
          localStorage.setItem(
            "salvarNomeUsuario",
            JSON.stringify(data[i].primeiroNome)
          );
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Bem vindo!",
            background: "#f1f4de",
            timer: 1000,
            showConfirmButton: false,
          });
          //definindo um tempo para carregar a index, para que o usuário possa ver o SweetAlert
          setTimeout(() => {
            window.location.href = "../index.html";
          }, 1000);
          break;
        }
        //validando se o usuário tem cadastro
        if (inputUserName != data[i].email) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "E-mail não cadastrado!",
            background: "#f1f4de",
            timer: 1000,
            showConfirmButton: false,
          });
        }
      }
    });
};
