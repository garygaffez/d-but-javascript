const rocButton = document.getElementById('Pierre');
const paperButton = document.getElementById('Feuille');
const scissorsButton = document.getElementById('Ciseaux');
var player = 0;
let countDownPlayer = 1;
let countDownRobot = 1;
let countDraw = 1

function aleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}

// function numberGame (selectObject) {
//     console.log(numberGame)
//     let nombreParties = 0;
//     for (let i = 0; i < selectObject.length; i++);
        
// }


// const monAudio2 = document.querySelector('.gifle');
// scissorsButton.onmouseover = () => {
//     monAudio2.play();
// }
// scissorsButton.onmouseout = () => {
//     monAudio2.pause();
// }




rocButton.addEventListener('click', () => {
    const monAudio1 = document.querySelector('.poing');
    monAudio1.play();
    player = 0;
    var robot = aleatoire(0, 2);
    if (player === robot) {
        document.querySelector(".resultat").innerHTML = "Égalité !";
        document.querySelector(".countDraw").innerHTML = `<p>Draw</p> ${countDraw++}`;
    } else if (robot === 1) {
        document.querySelector(".resultat").innerHTML = "Oh non !!! Vous avez perdu !";
        document.querySelector(".countRobot").innerHTML = `<p>Robot score</p> ${countDownRobot++}`;
    } else {
        document.querySelector(".resultat").innerHTML = "Oui !!! Vous avez Gagné !";
        document.querySelector(".countPlayer").innerHTML = `<p>Player score</p> ${countDownPlayer++}`;
    }
})

paperButton.onclick = () => {
    const monAudio2 = document.querySelector('.ciseaux');
    monAudio2.play();
    player = 1;
    var robot = aleatoire(0, 2);
    var result = "";
    if (player === robot) {
        document.querySelector(".resultat").innerHTML = "Égalité !";
        document.querySelector(".countDraw").innerHTML = `<p>Draw</p> ${countDraw++}`;
    } else if (robot === 2) {
        document.querySelector(".resultat").innerHTML = "Oh non !!! Vous avez perdu !";
        document.querySelector(".countRobot").innerHTML = `<p>Robot score</p> ${countDownRobot++}`;
    } else {
        document.querySelector(".resultat").innerHTML = "Oui !!! Vous avez Gagné !";
        document.querySelector(".countPlayer").innerHTML = `<p>Player score</p> ${countDownPlayer++}`;
    }
    console.log(player, robot)
}

scissorsButton.onclick = () => {
    const monAudio3 = document.querySelector('.gifle');
    monAudio3.play();
    player = 2;
    var robot = aleatoire(0, 2);
    
    if (player === robot) {
        document.querySelector("#resultChif").innerHTML = "Égalité !";
        document.querySelector(".countDraw").innerHTML = `<p>Draw</p> ${countDraw++}`;
    } else if (robot === 0) {
        document.querySelector(".resultat").innerHTML = "Oh non !!! Vous avez perdu !";
        document.querySelector(".countRobot").innerHTML = `<p>Robot score</p> ${countDownRobot++}`;

    } else {
        document.querySelector(".resultat").innerHTML = "Oui !!! Vous avez Gagné !";
        document.querySelector(".countPlayer").innerHTML = `<p>Player score</p> ${countDownPlayer++}`;

    }
    console.log(player, robot)
}

// start.onclick = () => {
//     aleatoire();
//     console.log(aleatoire)
//     if (player === start) {
//         alert('ok')
//     }
// }

// for (let i = 1 ; i < 21 ; i++) { console.log(i) }


