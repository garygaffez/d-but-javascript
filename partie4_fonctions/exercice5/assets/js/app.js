let getStringLength = (string) => {
    let stringLength;
    if(string.length === 1){
        stringLength = 'La chaîne contient qu\'un seul caractère';
    } else {
        stringLength = `La chaîne contient ${string.length} caractères`;
    }
    return stringLength;
}

var result = getStringLength("toto");
console.log(result);