// $(document).ready(function(){

//     $('#clone').click(function(){
//      // Create clone of <div class='input-form'>
//     var newel = $('.form-group:last').clone();
//      // Add after last <div class='input-form'>
// $(newel).insertAfter(".form-group:last");
//     });

// });






// var i=1;
// while(i<3) {
// double.id="enfant"+i;
// cloneElement.after(double);
//     i=i+1;
// }

var i=0;

cloneEnfant.onclick = () => {
    var double = enfant.cloneNode(true); 
    i++;
    var updatedId = "enfant" + i;
    double.id = updatedId;
        console.log(double);
    
    enfant.parentNode.appendChild(double);

    var userName = document.querySelector(`#${updatedId} #userName`);
    
    userName.id = "userName" + i;
    userName.name = "userName" + i;

    console.log(userName);

    var userAge = document.querySelector(`#${updatedId} #userAge`);
    userAge.id = "userAge" + i;
    userAge.name = "userAge" + i;

        console.log(userAge);
}

