// var password = document.getElementById("password"); 
// var confirm_password = document.getElementById("pass2");

// function validatePassword(){
//     if(password.value != confirm_password.value) {
//     confirm_password.setCustomValidity("Les mots de passe ne correspondent");
// }   else {
//     confirm_password.setCustomValidity('');
// }
// }

// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;


// function initElement () {

// var password = document.getElementById("password"); 
// var confirm_password = document.getElementById("pass2");

// if(password.value != confirm_password.value) {
//     password.style.border = "2px solid green";
// }   else {
//     password.style.border = "2px solid red";
// }
// }


var buttonConfirm = document.getElementById("buttonConfirm");
var password = document.getElementById("password");
var confirm_password = document.getElementById("pass2");

buttonConfirm.onclick = () => {
    if(password.value == confirm_password.value) {
            password.style.border = "2px dotted green";
            confirm_password.style.border = "2px dotted green";
        }   else {
            password.style.border = "2px dotted red";
            confirm_password.style.border = "2px dotted red";
            // alert("ton mot de passe n'est pas bon \"gary\"")
        }
}