document.addEventListener("DOMContentLoaded", function() {
    let btnsExcluir = document.querySelectorAll(".btn-excluir");

    for (let i = 0; i < btnsExcluir.length; i++) {
        btnsExcluir[i].addEventListener("click", excluir);
    }

    function excluir() {
        let id = this.dataset.id;

        if (id) {
            fetch("/seeds/aluno/excluir", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ aluno_RA: id })  
            })
            .then(function(resposta) {
                return resposta.json();
            })
            .then(function(corpo) {
                alert(corpo.msg);
                if (corpo.ok) {
                    window.location.reload();
                }
            });
        }
    }
});
