var openClose = document.getElementById("open__close");
var menuHamburguer = document.getElementById("menu__hamburguer");

openClose.addEventListener("click", () =>{
    menuHamburguer.classList.toggle("take__off");
    openClose.classList.toggle("change");
})

let btnUp = window.pageYOffset;
window.onscroll = function() {
    let displace = window.pageYOffset;
    if (btnUp < displace){
        this.document.getElementById('up').style.display = 'block';
    } else{
        document.getElementById('up').style.display = 'none';
    }
}