const btnMenuPromo = document.querySelectorAll(".js-btn-menu");
const conteudoPromo = document.querySelectorAll(".js-conteudo-promo");
conteudoPromo[0].classList.add("show")

const ativandoTab = (index) => {
    conteudoPromo.forEach((div) => {
        div.classList.remove("show");
    });
    conteudoPromo[index].classList.add("show");
}

btnMenuPromo.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
        ativandoTab(index);
    });
});