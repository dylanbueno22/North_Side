document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    // Aparece suavemente
    header.classList.add("show");

    // Função para atualizar a classe com base no scroll
    const updateHeaderOnScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add("scroll");
        } else {
            header.classList.remove("scroll");
        }
    };

    // Verifica no carregamento
    updateHeaderOnScroll();

    // E também quando rolar
    window.addEventListener("scroll", updateHeaderOnScroll);
    console.log("scroll detectado")

});






