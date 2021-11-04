var userAge = prompt("Quel est votre âge ?");
userAge = parseInt(userAge, 10);

if (userAge <= 0 || userAge > 120 || isNaN(userAge)) {
    alert("Votre âge est incorrect");
}
else {
    if (userAge < 18){
        alert("Vous êtes mineur");        
    }
    else {
        alert("Vous êtes majeur");
    }
}


// if (userAge >=18 && userAge <=99){    
//     alert("Vous êtes majeur");
// }
// else if (userAge >0 && userAge<18){
//     alert("vous êtes mineur");
// }
// else if(userAge <= 0) {
//     alert("Vous n'existez pas");
// }  
// else if (userAge > 99){
//     alert("Vous êtes trop vieux");
// }
// else if(isNaN(userAge)) {
//     alert("Veuillez entrer un numéro");
// }

