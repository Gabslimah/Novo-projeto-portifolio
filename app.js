document.addEventListener("DOMContentLoaded", function () {  // Transição de texto e cor do rodapé
    const devName = document.getElementById("dev-name");
    const rodape = document.querySelector(".rodape");

    // Armazena o texto original
    const originalText = devName.textContent;

    // Muda o texto e a cor ao passar o mouse (mouseenter)
    rodape.addEventListener("mouseenter", function () {
        devName.textContent = "© 2025 Alura Projeto-ONE G8: Créditos Luri"; // Texto alternativo
        rodape.style.backgroundColor = "#F6F6F6"; // Altere para a cor desejada
    });

    // Restaura o texto e a cor ao sair o mouse (mouseleave)
    rodape.addEventListener("mouseleave", function () {
        devName.textContent = originalText; // Restaura o texto original
        rodape.style.backgroundColor = "#22D4FD"; // Restaura a cor original
    });
});


                   //Opção de código para colocar som nos botões //
/* const links = document.querySelectorAll('a'); // Seleciona todos os links
const clickSound = document.getElementById('click-sound'); // Seleciona o elemento de áudio
let isPlaying = false;
links.forEach(link => {
    link.addEventListener('click', () => {
        if (!isPlaying) {           
            clickSound.play(); // Toca o som
            clickSound.onended = () => {
                isPlaying = false; // Permite tocar novamente quando o som terminar
            };
        }
    });
});

*/


document.addEventListener('DOMContentLoaded', () => {  // Som ao clicar nos botões //
    const links = document.querySelectorAll('a'); // Seleciona todos os links

    links.forEach(link => {
        link.addEventListener('click', () => {
            const clickSound = new Audio('./sound/som.mp3'); // Cria um novo objeto de áudio
            clickSound.currentTime = 0; // Reinicia o som
            clickSound.play(); // Reproduz o som
        });
    });
});


//const apresentacaoImagemDev = document.querySelector('.apresentacao__imagem-dev'); // Transição de ícones ao clicar na foto
//const apresentacaoLinks = document.querySelector('.apresentacao__links');

//apresentacaoImagemDev.addEventListener('click', () => {
  //  apresentacaoLinks.classList.toggle('aparecer'); // Adiciona ou remove a classe para mostrar os ícones
//}); 



//const apresentacaoImagemDev = document.querySelector('#about .apresentacao__imagem-dev'); // Aparecer icones de contato apos passar o mouse na foto //
//const apresentacaoLinks = document.querySelector('#about.apresentacao__links');

//apresentacaoImagemDev.addEventListener('mouseenter', () => {
    // Aqui você pode adicionar qualquer ação que queira ao passar o mouse
//});

//apresentacaoImagemDev.addEventListener('mouseleave', () => {
    // Após o mouse sair, adicione um atraso antes de mostrar os ícones
  //  setTimeout(() => {
 //       apresentacaoLinks.classList.toggle('aparecer'); // Mostra os ícones
   // }, 500); // Ajuste o tempo conforme necessário
//});


// Seleciona o contêiner da imagem e os links de contato
// Verifica se estamos na página correta
if (document.getElementById('about')) {
    const apresentacaoImagemDev = document.querySelector('#about .apresentacao__imagem-dev');
    const apresentacaoLinks = document.querySelector('#about .apresentacao__links');

    if (apresentacaoImagemDev && apresentacaoLinks) {
        apresentacaoImagemDev.addEventListener('mouseenter', () => {
            // Aqui você pode adicionar qualquer ação que queira ao passar o mouse
        });

        apresentacaoImagemDev.addEventListener('mouseleave', () => {
            // Após o mouse sair, adicione um atraso antes de mostrar os ícones
            setTimeout(() => {
                apresentacaoLinks.classList.toggle('aparecer'); // Mostra os ícones
            }, 500); // Ajuste o tempo conforme necessário
        });
    }
}