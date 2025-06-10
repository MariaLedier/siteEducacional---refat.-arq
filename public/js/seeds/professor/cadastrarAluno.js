
console.log("Script cadastroAluno.js carregado");
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnCadastrar").addEventListener("click", function (event) {
    console.log("chegou")
    event.preventDefault();

    let aluno = {
      aluno_RA: document.getElementById("aluno_RA").value.trim(),
      aluno_nome: document.getElementById("aluno_nome").value.trim(),
      aluno_CPF: document.getElementById("aluno_CPF").value.trim(),
      aluno_nasc: document.getElementById("aluno_nasc").value,
      aluno_fone: document.getElementById("aluno_fone").value.trim(),
      aluno_email: document.getElementById("aluno_email").value.trim(),
      aluno_mae: document.getElementById("aluno_mae").value.trim(),
      aluno_pai: document.getElementById("aluno_pai").value.trim(),
      aluno_respCPF: document.getElementById("aluno_respCPF").value.trim(),
      aluno_endereco: document.getElementById("aluno_endereco").value.trim(),
      aluno_senha: document.getElementById("aluno_senha").value.trim(),
    
    };

    // Validação básica
    if (!aluno.aluno_RA || !aluno.aluno_nome || !aluno.aluno_CPF || !aluno.aluno_nasc || !aluno.aluno_senha) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    fetch("/seeds/aluno/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(aluno)
    })
      .then(response => response.json())
      .then(res => {
        if (res.ok) {
          alert("Aluno cadastrado com sucesso!");
          window.location.href = "/professor";
        } else {
          alert(res.msg || "Erro ao cadastrar aluno.");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Erro na comunicação com o servidor.");
      });
  });
});
