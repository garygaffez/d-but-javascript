const hello = (prenom, nom) => {
    return (`Bonjour ${prenom} ${nom}`);
}

btnValid.onclick = () => {
    let result = hello(firstName.value, lastName.value);
    target.innerHTML = result;
}