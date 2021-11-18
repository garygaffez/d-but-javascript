/***********methode 1 sans tableau***********/

const preziLink = document.getElementById("preziLink");
const key = document.getElementById("key");
const btnInsert = document.getElementById("btnInsert");
const IsOutput = document.getElementById("IsOutput");

btnInsert.onclick = function () {
    let inputKey = key.value
    let inputLink = preziLink.value;

    if (inputKey && inputLink) {
        localStorage.setItem(inputKey, inputLink);
        location.reload();
    }
}

for (let i=0; i < localStorage.length; i++) {
    const inputKey = localStorage.key(i);
    const inputLink = localStorage.getItem(inputKey);

    IsOutput.innerHTML += `
        <li>${inputKey}: <a href="${inputLink}" target="blank">lien</a></li>
        <button type="button" class="remove" data-title="${inputKey}">Delete</button>
    `;
}

const buttonRemove = document.querySelectorAll('.remove');
console.log(buttonRemove)

buttonRemove.forEach(element => {
    element.addEventListener('click', function(event){
        // console.log(event.target.dataset.title)
        let inputKey = event.target.dataset.title;
        localStorage.removeItem(inputKey);

        IsOutput.innerHTML = "";

        for (let i=0; i < localStorage.length; i++) {
            const inputKey = localStorage.key(i);
            const inputLink = localStorage.getItem(inputKey);
        
            IsOutput.innerHTML += `
                <li>${inputKey}: <a href="${inputLink}" target="blank">lien</a></li>
                <button type="button" class="remove" data-title="${inputKey}">Delete</button>
            `;
        }
        })
});

// localStorage.setItem('colorSetting', '#a4509b');
// localStorage.setItem('age', 37.5)
// localStorage.setItem('email', 'gary.gaffez@gmail.com')

// console.log(localStorage.getItem('age'))
// console.log(localStorage.removeItem('colorSetting'))
// console.log(localStorage.getItem('email'))

// var userName = "Gary";
// localStorage.setItem("uN", userName )

// var users = ["Bob", "Thierry", "Matthieu", "lydia"];
// var change = JSON.stringify(users);
// localStorage.setItem("userNames", change);

// let reChange = localStorage.getItem("userNames")
// console.log(reChange);

// let superChange = JSON.parse(reChange);
// console.log(superChange);

// superChange.forEach((element, index) => {
//     console.log(index + ' : ' + element);
// })


/***********methode 2 avec tableau***********/






