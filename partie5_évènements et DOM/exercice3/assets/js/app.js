// let form = document.querySelector("#loginform");

// //ecoute de la modification du nom
// form.Name.addEventListener('change', function(){
//     validName(this);
// });

// //***************Validation Name****************/
// const validName = function(inputName) {
//     //création de la regExp
//     let nameRegExp = new RegExp(
//         '[a-zA-Z]');
//     let testName = nameRegExp.test(inputName.value);

//     //récupération balise small
//     let smallText = inputName.nextElementSibling;

//     //test regEx
//     if (testName == true) {
//         smallText.innerHTML = 'Nom valide';
//         smallText.classList.remove('red');
//         smallText.classList.add('green');
//     } else {
//         smallText.innerHTML = 'Nom pas valide';
//         smallText.classList.remove('green');
//         smallText.classList.add('red');
//     }
// };

var regexName=/^[a-zA-Zéè-]+$/;
var regexMail=/^[a-zA-Zé\-_]+@[a-zA-Z0-9]+.[a-zA-Z]{2,5}$/;
var regexAge=/^[0-9]{1,3}$/;   


userName.onchange = () => {

if (regexName.test(userName.value) == false)
{
    textName.style.display="block";
} 
else 
{
    textName.style.display="none";
}   
}

userMail.onchange = () => {
    if (regexMail.test(userMail.value) == false){
        textMail.style.display="block";
    } else {
        textMail.style.display="none";
    }   
}

userAge.onchange = () => {

if (regexAge.test(userAge.value) == false)
{
    textAge.style.display="block";
} 
else 
{
    textAge.style.display="none";
    }   
    }


