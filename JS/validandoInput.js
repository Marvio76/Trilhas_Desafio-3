document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form-2");
    const mensagem = document.getElementById("verificaOsIpunt");
    mensagem.style.textAlign = "center"; 

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const camposObrigatorios = document.querySelectorAll(".input_obrigatorioTotal");
        const cpfAcesso = document.getElementById("cadastroCpf");
        const senha = document.getElementById("loginSenha");

        mensagem.innerHTML = "";
        mensagem.className = "";

        // Limpa fundo anterior
        [...camposObrigatorios, cpfAcesso, senha].forEach(input => {
            input.style.backgroundColor = "";
        });

        // Verifica campos do formulário
        for (let input of camposObrigatorios) {
            const nomeCampo = input.previousElementSibling ? input.previousElementSibling.innerText : "Campo";
            const tipo = input.getAttribute("type");
            const valor = input.value.trim();

            if (valor === "") {
                mostrarErro(`O campo "${nomeCampo}" é obrigatório.`, input);
                return;
            }

            if (tipo === "email") {
                const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!regexEmail.test(valor)) {
                    mostrarErro("Formato de e-mail inválido.", input);
                    return;
                }
            }

            if (input.id === "cpf") {
                const cpfLimpo = valor.replace(/\D/g, "");
                if (cpfLimpo.length !== 11) {
                    mostrarErro("CPF está incompleto ou inválido.", input);
                    return;
                }
            }

            if (input.id === "telefone") {
                const telefoneLimpo = valor.replace(/\D/g, "");
                if (telefoneLimpo.length < 10) {
                    mostrarErro("Telefone incompleto ou inválido.", input);
                    return;
                }
            }

            if (tipo === "file" && input.files.length === 0) {
                mostrarErro(`O campo "${nomeCampo}" exige o envio de um arquivo.`, input);
                return;
            }
        }

        // Verifica CPF de acesso
        if (cpfAcesso.value.trim() === "") {
            mostrarErro(`O campo "Digite seu CPF" é obrigatório.`, cpfAcesso);
            return;
        }

        const cpfLimpoAcesso = cpfAcesso.value.replace(/\D/g, "");
        if (cpfLimpoAcesso.length !== 11) {
            mostrarErro("O CPF de acesso está incompleto ou inválido.", cpfAcesso);
            return;
        }

        // Verifica senha
        if (senha.value.trim() === "") {
            mostrarErro("O campo \"Senha\" é obrigatório.", senha);
            return;
        }

        // Sucesso
        mensagem.className = "alert alert-success mt-3 p-2";
        mensagem.innerText = "Após a conclusão de todos as etapas da inscrição, uma menssagem de comfimação será enviada para o seu email";
    });

    function mostrarErro(texto, input) {
        mensagem.className = "alert alert-warning mt-3 p-2";
        mensagem.innerHTML = `<strong>${texto}</strong>`;
        input.style.backgroundColor = "#fff3cd"; // amarelo claro
        input.scrollIntoView({ behavior: "smooth", block: "center" });
        input.focus();
    }
});
