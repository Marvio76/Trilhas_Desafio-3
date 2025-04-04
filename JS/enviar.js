document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form-2');
    const alertBox = document.getElementById("alert");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.init("aE6ZAMWjLIaX00FXR");

        const inputsObrigatorios = document.querySelectorAll(".input_obrigatorioTotal");
        let formValido = [...inputsObrigatorios].every(input => input.value.trim() !== "");

        if (!formValido) {
            alertBox.className = "alert alert-danger text-center mt-3 p-1 show";
            alertBox.innerHTML = "Por favor, preencha todos os campos obrigatórios.";
            return;
        }

        const cpfInput = document.getElementById("cadastroCpf").value.trim();
        const senhaInput = document.getElementById("loginSenha").value.trim();
        const usuarioArmazenado = localStorage.getItem(cpfInput);

        if (!usuarioArmazenado) {
            alertBox.className = "alert alert-danger text-center mt-3 p-1 show";
            alertBox.innerHTML = "CPF Incorreto!";
            return;
        }

        const dadosUsuario = JSON.parse(usuarioArmazenado);

        if (senhaInput !== dadosUsuario.senha) {
            alertBox.className = "alert alert-danger text-center mt-3 p-1 show";
            alertBox.innerHTML = "Senha incorreta!";
            return;
        }

        alertBox.className = "alert alert-success text-center mt-3 p-1 show";
        alertBox.innerHTML = "Inscrição realizada com sucesso!";

        // ✅ Criar formulário temporário com apenas nome e email
        const tempForm = document.createElement('form');
        const nomeInput = document.querySelector('input[name="nome_completo"]');
        const emailInput = document.querySelector('input[name="email"]');

        const inputNome = document.createElement('input');
        inputNome.setAttribute('type', 'hidden');
        inputNome.setAttribute('name', 'nome_completo');
        inputNome.setAttribute('value', nomeInput.value);

        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'hidden');
        inputEmail.setAttribute('name', 'email');
        inputEmail.setAttribute('value', emailInput.value);

        tempForm.appendChild(inputNome);
        tempForm.appendChild(inputEmail);

        document.body.appendChild(tempForm); // necessário para envio via EmailJS

        // ✅ Enviar apenas os campos nome e email
        emailjs.sendForm('service_po12tie', 'template_yzdqht9', tempForm)
            .then(() => {
                alert('Email enviado com sucesso!');
                document.body.removeChild(tempForm); // remove o form auxiliar depois
            })
            .catch((error) => {
                console.error("Erro ao enviar email:", error);
                alert('Erro ao enviar email. Verifique o console.');
                document.body.removeChild(tempForm);
            });

        localStorage.setItem("usuarioLogado", cpfInput);
    });
});
