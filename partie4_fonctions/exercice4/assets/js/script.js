var BigImage = document.getElementById('growImage');

var grow = () => {
    growImage.classList.toggle('img');
}

BigImage.addEventListener('click', grow);