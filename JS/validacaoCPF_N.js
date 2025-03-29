document.getElementById("cpf").addEventListener("input", function () {
    let cpfInput = this;
    let cpf = cpfInput.value;

    // Se houver letras, exibir mensagem de erro dentro do input
    if (/[a-zA-Z]/.test(cpf)) {
        cpfInput.classList.add("erro");
        cpfInput.value = "Erro: CPF não pode ter letras!";
        
        // Fazer o cursor ficar no final do texto
        setTimeout(() => cpfInput.setSelectionRange(cpfInput.value.length, cpfInput.value.length), 10);
    } else {
        cpfInput.classList.remove("erro");

        // Remover caracteres inválidos e manter apenas números, ".", e "-"
        cpfInput.value = cpf.replace(/[^0-9.-]/g, '');
    }
});
document.getElementById("telefone").addEventListener("input", function () {
    let telefoneInput = this;
    let telefone = telefoneInput.value;

    // Se houver letras, exibir erro e manter o texto digitado
    if (/[a-zA-Z]/.test(telefone)) {
        telefoneInput.classList.add("erro");
    } else {
        telefoneInput.classList.remove("erro");
    }

    // Remover caracteres inválidos e manter apenas números e os caracteres permitidos "()", " " e "-"
    telefoneInput.value = telefone.replace(/[^0-9()\s-]/g, '');
});


// Se o usuário clicar no input quando estiver com erro, limpar o campo para ele poder digitar novamente
document.getElementById("cpf").addEventListener("focus", function () {
    if (this.classList.contains("erro")) {
        this.value = "";
        this.classList.remove("erro");
    }
});