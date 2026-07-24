// ==========================================
// BLOG SOBRE FILMES
// Desenvolvido por Miguel Klaina e Vitor
// ==========================================

// Seleciona todos os títulos dos cards
const titulos = document.querySelectorAll(".titulo-card");

// Adiciona o evento de clique em cada título
titulos.forEach((titulo) => {

    titulo.addEventListener("click", () => {

        // Card clicado
        const conteudo = titulo.nextElementSibling;

        // Símbolo (+ ou -)
        const simbolo = titulo.querySelector("span");

        // Verifica se o card já está aberto
        const aberto = conteudo.classList.contains("ativo");

        // Fecha todos os cards
        document.querySelectorAll(".conteudo").forEach((texto) => {

            texto.classList.remove("ativo");

        });

        // Coloca + em todos
        document.querySelectorAll(".titulo-card span").forEach((icone) => {

            icone.textContent = "+";

        });

        // Se estava fechado, abre
        if (!aberto) {

            conteudo.classList.add("ativo");

            simbolo.textContent = "−";

        }

    });

});

// ==========================================
// ROLAGEM SUAVE DO BOTÃO EXPLORAR
// ==========================================

const botao = document.querySelector(".botao");

if (botao) {

    botao.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector("#temas").scrollIntoView({

            behavior: "smooth"

        });

    });

}

// ==========================================
// DESTAQUE NO MENU
// ==========================================

const links = document.querySelectorAll("nav a");

links.forEach((link) => {

    link.addEventListener("mouseenter", () => {

        link.style.color = "#E50914";

    });

    link.addEventListener("mouseleave", () => {

        link.style.color = "";

    });

});

// ==========================================
// ANIMAÇÃO DE ENTRADA DOS CARDS
// ==========================================

const cards = document.querySelectorAll(".card");

const aparecer = () => {

    cards.forEach((card) => {

        const topo = card.getBoundingClientRect().top;

        const alturaTela = window.innerHeight;

        if (topo < alturaTela - 100) {

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }

    });

};

// Estado inicial dos cards
cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "all .6s ease";

});

// Executa ao carregar
window.addEventListener("load", aparecer);

// Executa ao rolar a página
window.addEventListener("scroll", aparecer);