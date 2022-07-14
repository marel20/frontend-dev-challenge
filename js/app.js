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


var getData = function() {
    var name = document.getElementById("name").value();
    var surname = document.getElementById("surname").value();
    var address = document.getElementById("address").value();
    var email = document.getElementById("email").value();
    var phone = document.getElementById("phone").value();
    var select = document.getElementById("select").value();
    var textarea = document.getElementById("textarea").value();

  /*  var datos = {
        nombre: name,
        apellido: surname,
        direccion: address,
        mail: email,
        telefono: phone,
        seleccion: select,
        consulta: textarea
    }
        console.log(datos);
*/

    if (name == "") {
        name.focus();
    } else {
        if (surname == "") {
            surname.focus();
        } else {
            if (address == ""){
                address.focus();
            } else {
                if (email == "") {
                    email.focus();
                } else {
                    if (phone == "") {
                        phone.focus();
                    } else {
                        if (select == "") {
                            select.focus();
                        } else {
                            if (textarea == "") {
                                textarea.focus();
                            } else{
                                console.log(name);
                                console.log(surname);
                                console.log(address);
                                console.log(email);
                                console.log(phone);
                                console.log(select);
                                console.log(textarea);
                            }
                            name = "";
                            surname = "";
                            address = "";
                            email = "";
                            phone = "";
                            select = "";
                            textarea = "";
                        }
                    }
                }
            }
        }
    }
    var datos = [name, surname, address, email, phone, select, textarea];
    window.alert(datos);
}