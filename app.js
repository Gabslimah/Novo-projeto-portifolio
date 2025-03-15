document.addEventListener("DOMContentLoaded", function () {
    const devName = document.getElementById("dev-name");

    // Armazena o texto original
    const originalText = devName.textContent;

    // Muda o texto ao passar o mouse
    devName.addEventListener("mouseenter", function () {
        devName.textContent = "Alura Projeto-ONE G8: Créditos Luri"; // Altere para o texto que você deseja exibir //
    });

    // Restaura o texto original quando o mouse sai
    devName.addEventListener("mouseenter", function () {
        devName.textContent = originalText; // Restaura o texto original
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const devName = document.getElementById("dev-name");
    const rodape = document.querySelector(".rodape");

    // Muda a cor do rodapé ao passar o mouse
    devName.addEventListener("mouseenter", function () {
        rodape.style.backgroundColor = "#000000"; // Altere para a cor desejada
    });

    // Restaura a cor original quando o mouse sai
    devName.addEventListener("mouseenter", function () {
        rodape.style.backgroundColor = "#22D4FD"; // Restaura a cor original
    });
});



        // Seleciona todos os links na navegação
        const links = document.querySelectorAll('.apresentacao__links__link a');

        // Adiciona um evento de clique a cada link
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                // Previne a navegação imediata
                event.preventDefault();

                // Reproduz o som
                document.getElementById('meuSom').play();
            });
        });