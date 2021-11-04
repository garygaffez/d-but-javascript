var number1 = prompt('donne moi un premier numéro');
var number2 = prompt('donne moi un deuxiéme numéro');

//var resultCalc = parseInt(number1, 10) + parseInt(number2, 10);
var resultCalc = Number(number1) + Number(number2);

console.log(resultCalc);
alert(`le résultat est ${resultCalc}`);
