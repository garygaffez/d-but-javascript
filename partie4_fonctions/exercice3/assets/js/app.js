/**********fonction Gras***********/
const bold = (element) => {
    element.classList.toggle('bold');
}

btnBold.onclick = () => {
    element = document.getElementById('boldBold');
    bold(element);
}

/**********fonction Couleur***********/
const changeColor = (colorElement) => {
    colorElement.classList.toggle('colorGreen');
}

btnColor.onclick = () => {
    colorElement = document.querySelector('body');
    changeColor(colorElement);
}

/**********fonction Agrandir***********/
const grow = (bigElement) => {
    bigElement.classList.toggle('bigSize');
}

btnGrow.onclick = () => {
    bigElement = document.querySelector('body');
    grow(bigElement);
}