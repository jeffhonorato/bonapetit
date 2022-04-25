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

// ATIVANDO MENU MOBILE 
const menuMobile = document.querySelector(".menu__mobile");

menuMobile.addEventListener("click", () => {
    let menu = document.querySelector(".nav__itens ");
    menu.classList.toggle("ativo");
})