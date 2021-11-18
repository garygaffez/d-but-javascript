//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
    let sentenceLength = sentence.length;
    return sentenceLength;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  let replaceLetter = sentence.replace('e', " ");
  return replaceLetter;
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  let concatenateWord = firstSentence + secondSentence;
  return concatenateWord;
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {  
  let fifthLetter = sentence.charAt(4);
  return fifthLetter;
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  let nineLetter = sentence.substring(0, 9);
  return nineLetter;
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  let maj = sentence.toUpperCase();
  return maj;
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  let lowerTheSentence = sentence.toLowerCase();
  return lowerTheSentence;
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  let spaceRemove = sentence.trim();
  return spaceRemove;
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  if (typeof sentence === 'string') {
    return true;
} else {
    return false;
}
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  // let extension = getFileExtension(fileName);  
  // return extension

  // // console.log(fileName);
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {  
  var element = sentence;
  nbesp = element.split(' ').length - 1;
  return nbesp;
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  let StringReverse = sentence;
  let rev = StringReverse.split('').reverse().join('');
  return rev;
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  // console.log(sentence);
  let paragraph = sentence;
  let searchWord = 'La Manu';
  let result = paragraph.indexOf(searchWord);
  return result;
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  console.log(number);
  return 'A compléter';
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  return 'A compléter';
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  return 'A compléter';
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  return 'A compléter';
}
