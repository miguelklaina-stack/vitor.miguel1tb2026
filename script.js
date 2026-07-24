// =====================================
// BLOG SOBRE FILMES
// Miguel Klaina e Vitor
// =====================================

// Seleciona todos os cartões
const cards = document.querySelectorAll(".card");

// Percorre cada cartão
cards.forEach((card) => {

    const titulo = card.querySelector(".titulo-card");
    const conteudo = card.querySelector(".conteudo");
    const simbolo = card.querySelector("span");

    // Clique no título
    titulo.addEventListener("click", () => {

        // Verifica se o cartão clicado já está aberto
        const aberto = conteudo.style.maxHeight;

        // Fecha todos os outros cartões
        cards.forEach((outroCard) => {

            if (outroCard !== card) {

                outroCard.querySelector(".conteudo").style.maxHeight = null;

                outroCard.querySelector("span").textContent = "+";

            }

        });

        // Se estiver aberto, fecha
        if (aberto) {

            conteudo.style.maxHeight = null;

            simbolo.textContent = "+";

        }

        // Se estiver fechado, abre
        else {

            conteudo.style.maxHeight =
                conteudo.scrollHeight + "px";

            simbolo.textContent = "−";

        }

    });

});

// =====================================
// EFEITO NO MENU
// =====================================

const links = document.querySelectorAll("nav a");

links.forEach((link) => {

    link.addEventListener("mouseenter", () => {

        link.style.transform = "scale(1.08)";

    });

    link.addEventListener("mouseleave", () => {

        link.style.transform = "scale(1)";

    });

});

// =====================================
// EFEITO NOS CARDS
// =====================================

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".3s";

    });

});

// =====================================
// ROLAGEM SUAVE DO BOTÃO
// =====================================

const botao = document.querySelector(".botao");

if(botao){

    botao.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector("#temas");

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

}