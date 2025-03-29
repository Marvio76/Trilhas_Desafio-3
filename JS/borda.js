
const radios = document.querySelectorAll('input[type="radio"]');


radios.forEach(radio => {
    radio.addEventListener('change', function() {

        document.querySelectorAll('.trilha').forEach(trilha => {
            trilha.style.border = '2px solid #DCDCDC';
        });

        if (this.checked) {
            this.closest('.trilha').style.border = '2px solid orange';
        }
    });
});


function resetBorders() {
    document.querySelectorAll('.trilha').forEach(trilha => {
        trilha.style.border = '2px solid #DCDCDC';
    });
}


document.querySelector('.input__enviar').addEventListener('click', resetBorders);

document.querySelector('.input__cancelar').addEventListener('click', resetBorders);
