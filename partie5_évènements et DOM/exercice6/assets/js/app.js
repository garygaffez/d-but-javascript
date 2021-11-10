// const userName = document.getElementById('userName');
// const userMail = document.getElementById('userMail');
// const userAge = document.getElementById('userAge');

// userName.addEventListener('focus', (event) => {
//     event.target.style.border = "5px solid green";
// });

// userName.addEventListener('blur', (event) => {
//     event.target.style.border = "";
// });

// userMail.addEventListener('focus', (event) => {
//     event.target.style.border = "5px solid green";
// });

// userMail.addEventListener('blur', (event) => {
//     event.target.style.border = "";
// });

// userAge.addEventListener('focus', (event) => {
//     event.target.style.border = "5px solid green";
// });

// userAge.addEventListener('blur', (event) => {
//     event.target.style.border = "";
// });

const userName = document.getElementById('userName');
const userMail = document.getElementById('userMail');
const userAge = document.getElementById('userAge');

var focusName = () => {
    userName.style.border = "5px solid green";
}
var blurName = () => {
    userName.style.border = "";
}

var focusName2 = () => {
    userMail.style.border = "5px solid green";
}
var blurName2 = () => {
    userMail.style.border = "";
}

var focusName3 = () => {
    userAge.style.border = "5px solid green";
}
var blurName3 = () => {
    userAge.style.border = "";
}

userName.addEventListener('focus', focusName);
userMail.addEventListener('focus', focusName2);
userAge.addEventListener('focus', focusName3);

userName.addEventListener('blur', blurName);
userMail.addEventListener('blur', blurName2);
userAge.addEventListener('blur', blurName3);

//2éme methode
// userName.addEventListener('focus', () => {
//     userName.style.border = "5px solid green";
// });