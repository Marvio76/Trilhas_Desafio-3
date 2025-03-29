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

        if (!formValido) {
            alertBox.className = "alert alert-danger text-center mt-3 p-1 show";
            alertBox.innerHTML = "Por favor, preencha todos os campos obrigatórios.";
            return;
        }

        // Se tudo estiver correto
        alertBox.className = "alert alert-success text-center mt-3 p-1 show";
        alertBox.innerHTML = "Sua inscrição foi realizada com sucesso!";

        // Limpa o formulário após 2 segundos
        setTimeout(() => {
            form.reset();
            alertBox.classList.remove("show");
        }, 2000);
    });
});
