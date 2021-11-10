var buttonPink = document.getElementById("pink");
var buttonBlue = document.getElementById("blue");
var buttonPurple = document.getElementById("purple");
var buttonBold = document.getElementById("bold");
var buttonItalic = document.getElementById("italic");
var textChange = document.getElementById("change");

buttonPink.onclick = () => {
    textChange.style.color = 'pink';
}

buttonBlue.onclick = () => {
    textChange.style.color = 'blue';
}

buttonPurple.onclick = () => {
    textChange.style.color = 'purple';
}

buttonBold.onclick = () => {
    textChange.classList.toggle('bold');
}

buttonItalic.onclick = () => {
    textChange.classList.toggle('italic');
}

