var buttonConfirm = document.getElementById("buttonConfirm");
var password = document.getElementById("password");
var confirm_password = document.getElementById("pass2");

buttonConfirm.onclick = () => {
    if(password.value == confirm_password.value) {
            password.classList.add("green");
            confirm_password.classList.add("green");
            password.classList.remove("red");
            confirm_password.classList.remove("red");
        }   else {
            password.classList.add("red");
            confirm_password.classList.add("red");
            password.classList.remove("green");
            confirm_password.classList.remove("green");
        }
}


var carreBleu = document.getElementById("blueBlue");
var buttonlight = document.getElementById("myButton");

buttonlight.onclick = () => {
    carreBleu.classList.toggle('none');
}