
// Se o usuário clicar no input quando estiver com erro, limpar o campo para ele poder digitar novamente
document.getElementById("cpf").addEventListener("focus", function () {
    if (this.classList.contains("erro")) {
        this.value = "";
        this.classList.remove("erro");
    }
});

function formatarCPF(campo) {
    let cpf = campo.value.replace(/\D/g, ""); // Remove tudo que não for número

    // Limita a 11 dígitos
    if (cpf.length > 11) {
        cpf = cpf.slice(0, 11);
    }

    // Aplica a máscara XXX.XXX.XXX-XX
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    campo.value = cpf;
}