function salvar() {
    // Obtendo todos os elementos com a classe 'carregarDados'
    let inputs = document.querySelectorAll(".carregarDados");

    // Salvando o valor de cada campo no localStorage
    inputs.forEach((input, index) => {
        localStorage.setItem(input.name, input.value);
    });

    // Exibir alerta
    let alertBox = document.getElementById("alert");
    alertBox.className = "alert alert-success text-center mt-3 p-1 show";
    alertBox.innerHTML = "Salvo com sucesso";

    // Esconder alerta após 3 segundos
    setTimeout(() => {
        alertBox.classList.add("d-none");
    }, 3000);
}

function carregar() {
    // Obtendo todos os elementos com a classe 'carregarDados'
    let inputs = document.querySelectorAll(".carregarDados");

    // Carregando os valores do localStorage para cada campo
    inputs.forEach((input) => {
        if (localStorage.getItem(input.name)) {
            input.value = localStorage.getItem(input.name);
        }
    });
}