for (let i = 2020; i <= 2030; i++) {
    if (i % 4 == 0 && i % 100 !=0 || i % 400 == 0) {
        document.write(`<div class="red">${i}</div>`);
}
    else {
        document.write(`<div>${i}</div>`);
}
}
