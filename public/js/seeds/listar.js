document.addEventListener("DOMContentLoaded", function (){
    
    const btns = document.querySelectorAll(".btn-exclusao");
    for (let btn of btns){
        btn.addEventListener("click",excluir);
    }

    function excluir(){
        const id = this.dataset.id;
        const nome = this.dataset.nome;
        if(confirm(`Deseja realmente excluir a atividade ${nome}?`)){
            const that = this;
            fetch("/seeds/professor/excluir/" + id, 
            {
                method:"GET"
            }).then((resposta) => {
                return resposta.json();
            }).then((dados) =>{
                alert(dados.msg);
                if(dados.ok){
                    //excluir a linha da tabela
                    that.parentElement.parentElement.remove();
                }
            }).catch((erro)=>{
                console.log(erro);
            });
        }
    }
});