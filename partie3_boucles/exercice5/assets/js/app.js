let firstNumber = 2;
let secondNumber = 1;
let resultCalc = 0;

while (resultCalc < 250) {
    if (resultCalc !== 0) {
        document.write(`<div>${resultCalc}</div>`); 
    }    
        resultCalc = (firstNumber * secondNumber);    
        secondNumber = resultCalc;
}