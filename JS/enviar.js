document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const alertBox = document.getElementById("alert");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputsObrigatorios = document.querySelectorAll(".input_obrigatorioTotal");
        let formValido = true;

        inputsObrigatorios.forEach(input => {
            if (input.value.trim() === "") {
                formValido = false;
            }
        });

        // Obtém os valores do CPF e senha digitados pelo usuário
        const cpfInput = document.getElementById("cadastroCpf").value.trim();
        const senhaInput = document.getElementById("loginSenha").value.trim();

        // Recupera os dados armazenados no localStorage
        const usuarioArmazenado = localStorage.getItem(cpfInput);

        if (!usuarioArmazenado) {
            alertBox.className = "alert alert-danger text-center mt-3 p-1 show";
            alertBox.innerHTML = "CPF não encontrado!";
            return;
        }

        // Converte de JSON para objeto
        const dadosUsuario = JSON.parse(usuarioArmazenado);

        // Verifica se a senha está correta
        if (senhaInput !== dadosUsuario.senha) {
            alertBox.className = "alert alert-danger text-center mt-3 p-1 show";
            alertBox.innerHTML = "Senha incorreta!";
            return;
        }

        if (!formValido) {
            alertBox.className = "alert alert-danger text-center mt-3 p-1 show";
            alertBox.innerHTML = "Por favor, preencha todos os campos obrigatórios.";
            return;
        }

        // Se tudo estiver correto
        alertBox.className = "alert alert-success text-center mt-3 p-1 show";
        alertBox.innerHTML = "Inscrição realizada com sucesso!";

        // Enviar e-mail via EmailJS
        emailjs.sendForm('service_po12tie', 'template_yzdqht9', form)
            .then(() => {
               alert('Email enviado com sucesso!');
            }, (error) => {
                alert('Erro ao enviar email:', error);
            });

        // Salvar que o usuário está logado
        localStorage.setItem("usuarioLogado", cpfInput);

    });
});
