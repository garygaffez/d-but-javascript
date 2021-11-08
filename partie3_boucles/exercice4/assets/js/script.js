let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

days.forEach(item => {
    if (item == days[5] || item == 'Dimanche'){
        document.write(`<div class="bold">${item}</div>`);
    }
    else {
        document.write(`<div>${item}</div>`);
    }
})
