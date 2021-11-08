let firstNumber = 9;
let secondNumber = 2;
let resultCalc = 2;

while (resultCalc > 1) {
        resultCalc = firstNumber / secondNumber;
        if (resultCalc > 1){
                document.write(`<div>${resultCalc}</div>`);
        }           
        firstNumber = resultCalc;
}

// do {
//         resultCalc = firstNumber / secondNumber;
//         if (resultCalc > 1) {
//         document.write(`<div>${resultCalc}</div>`);
//         }            
//         firstNumber = resultCalc;   
// } while (resultCalc > 1)