/* document.addEventListener("DOMContentLoaded", function () {
    const devName = document.getElementById("dev-name");
    const rodape = document.querySelector(".rodape");
    // Armazena o texto original
    const originalText = devName.textContent;

    // Muda o texto ao passar o mouse
    devName.addEventListener("mouseenter", function () {
        devName.textContent = "©2025 Alura Projeto-ONE G8: Créditos Luri"; // Altere para o texto que você deseja exibir //
        rodape.style.backgroundColor = "#F6F6F6"; // Altere para a cor desejada
    });

    // Restaura o texto original quando o mouse sai
    devName.addEventListener("mouseleave", function () {
        devName.textContent = originalText; // Restaura o texto original
        rodape.style.backgroundColor = "#22D4FD";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const devName = document.getElementById("dev-name");
    const rodape = document.querySelector(".rodape");

    // Muda a cor do rodapé ao passar o mouse
    rodape.addEventListener("mouseenter", function () {
        rodape.style.backgroundColor = "#F6F6F6"; // Altere para a cor desejada
        

    // Restaura a cor original quando o mouse sai
    rodape.addEventListener("mouseleave", function () {
        rodape.style.backgroundColor = "#22D4FD"; // Restaura a cor original
        
    });
});  */

document.addEventListener("DOMContentLoaded", function () {
    const devName = document.getElementById("dev-name");
    const rodape = document.querySelector(".rodape");

    // Armazena o texto original
    const originalText = devName.textContent;

    // Muda o texto e a cor do rodapé ao passar o mouse
    rodape.addEventListener("mouseenter", function () {
        devName.textContent = "©2025 Alura Projeto-ONE G8: Créditos Luri"; // Texto alternativo
        rodape.style.backgroundColor = "#F6F6F6"; // Altere para a cor desejada
    });

    // Restaura o texto original e a cor quando o mouse sai
    rodape.addEventListener("mouseleave", function () {
        devName.textContent = originalText; // Restaura o texto original
        rodape.style.backgroundColor = "#22D4FD"; // Restaura a cor original
    });
});


























const links = document.querySelectorAll('a'); // Seleciona todos os links
const clickSound = document.getElementById('click-sound'); // Seleciona o elemento de áudio
let isPlaying = false;
links.forEach(link => {
    link.addEventListener('click', () => {
        if (!isPlaying) {
            isPlaying = true;
            clickSound.currentTime = 0; // Reinicia o som
            clickSound.play(); // Toca o som
            clickSound.onended = () => {
                isPlaying = false; // Permite tocar novamente quando o som terminar
            };
        }
    });
});




