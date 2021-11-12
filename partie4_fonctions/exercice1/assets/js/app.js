/******************declaration de la fonction****************** */
const multiplication = (firstNumber, secondNumber) => {
    let result = firstNumber*secondNumber;
    return result;
}

/***********2éme façon de faire******** */
// function multiplication(firstNumber, secondNumber) {
//     let result = firstNumber*secondNumber;
//     return result;
// }


/***************Déclaration de l'événement************* */
result.onclick = () => {
    //appel de fonction
    let result2 = multiplication(firstNumber.value, secondNumber.value);
    returnResult.value = result2;
}