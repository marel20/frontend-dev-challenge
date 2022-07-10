const openClose = document.getElementById("open__close");
const menuHamburguer = document.getElementById("menu__hamburguer");

openClose.addEventListener("click", () =>{
    menuHamburguer.classList.toggle("take__off");
    openClose.classList.toggle("change");
})