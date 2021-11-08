var userNote = Number(prompt('Donnez moi une note ?'));

if (userNote >= 0 && userNote <4){
    alert('nul');
}
else if (userNote >= 4 && userNote <7){
    alert('moyen');
}
else if (userNote >= 7 && userNote <9){
    alert('assez bien');
}
else if (userNote >= 9 && userNote <10){
    alert('bien');
}
else if (userNote == 10){
    alert('excellent');
}

else {
    alert('erreur')
}