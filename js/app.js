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

const accordionPanel = document.querySelectorAll('.accordion__panel');
const accordionTittle = document.querySelectorAll('.accordion__tittle');

accordionTittle.forEach( ( cadaaccordionTittle , i ) => {
    accordionTittle[i].addEventListener('click', () => {
        accordionPanel.forEach( ( cadaaccordionPanel , i ) => {
            accordionPanel[i].classList.remove('active');
        })
        accordionPanel[i].classList.add('active');
    })
})


var button = document.getElementById("regularBold");

button.addEventListener('click', function (){
    var regular = document.getElementById("textRegular");
    var bold = document.getElementById("textBold");
    
    if (bold.style.display == "none"){
        button.value = "Fuente Regular";
        button.style.fontWeight = "300";
        bold.style.display = "block";
        regular.style.display = "none";
} else{
    button.value = "Fuente Bold";
    button.style.fontWeight = "bold";
    bold.style.display = "none";
    regular.style.display = "block";
}
})


const content = document.querySelector('.content__comments')
const radius  = document.querySelectorAll('.radius')

radius.forEach( ( cadaradius , i )=> {
    radius[i].addEventListener('click',()=>{

        let position  = i
        let operation = position * -25

        content.style.transform = `translateX(${ operation }%)`

        radius.forEach( ( cadaradius , i )=>{

            radius[i].classList.remove('active')
        })
        radius[i].classList.add('active')
    })
})

function search() {
    let searchBar = document.getElementById('searchBar').value;
    searchBar = searchBar.toLowerCase();
    let text = document.getElementsByClassName('text__ol');
      
    for (i = 0; i < text.length; i++) { 
        if (!text[i].innerHTML.toLowerCase().includes(searchBar)) {
            text[i].style.display="none";
        }
        else {
            text[i].style.display="list-item";                 
        }
    }
}

function sendData(){
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var select = document.getElementById('select').value;
    var checkbox = document.getElementById('checkbox').value;
    var textarea = document.getElementById('textarea').value;

    if (name == "" || surname == "" || address == "" || email == "" || phone == "" || select == "" || checkbox == "NO" || textarea == ""){
        alert('Debe completar todos los campos');
    }else{
        if (confirm('??Estas seguro de enviar este formulario?')){
            alert('Datos enviados correctamente');
            console.log(name);
            console.log(surname);
            console.log(address);
            console.log(email);
            console.log(phone);
            console.log(select);
            console.log(checkbox);
            console.log(textarea);
        }
    }


        
}