const btnMenu = document.querySelectorAll(".js-btnMenu");
const conteudo = document.querySelectorAll(".js-tabConteudo");
conteudo[0].classList.add("ativo");

const activeTab = (index) => {
    conteudo.forEach((div) => {
        div.classList.remove("ativo")
    });
    conteudo[index].classList.add("ativo");
}

btnMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
        activeTab(index);
    });
});