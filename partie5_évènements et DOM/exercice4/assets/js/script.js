var imageMask = document.getElementById("changeImage");

imageMask.onclick = () => {
    if (imageMask.getAttribute('src') == "assets/img/mask.jpg"){
        imageMask.setAttribute('src', "assets/img/mask2.jpg");
        imageMask.setAttribute('alt', "autreImage");
    }
    else {
        imageMask.setAttribute('src', "assets/img/mask.jpg");
        imageMask.setAttribute('alt', "image");

    }
}

imageMask.onmouseover = () => {
    imageMask.style.width = "50%";
}



//1ere façon
var reduce = () => {
    imageMask.style.width = "20%";
}
imageMask.addEventListener('mouseout', reduce);


//2éme façon
imageMask.onmouseout = () => {
    imageMask.style.width = "20%";
}
