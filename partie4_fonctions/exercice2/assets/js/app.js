/**********fonction Gras***********/
//fonction classique
function bold(element) {
    element.classList.toggle('bold');
}

//fonction fléchée
let bold = (element) => {
    element.classList.toggle('bold');
}

/**********fonction Couleur***********/
function changeColor(element) {
    element.classList.toggle('colorGreen');
}

/**********fonction Agrandir***********/
function grow(bigElement) {
    bigElement.classList.toggle('bigSize');
}


btnBold.addEventListener('click', () => {
    element = document.getElementById('boldBold');
    bold(element);
});

btnColor.onclick = () => {
    mySelectedElement = document.querySelector('body');
    changeColor(mySelectedElement);
}

btnGrow.onclick = () => {
    bigElement = document.querySelector('body');
    grow(bigElement);
}