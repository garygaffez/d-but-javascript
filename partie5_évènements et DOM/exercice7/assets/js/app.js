const titre1 = document.querySelector('h1');
const titre2 = document.querySelector('h2');
const text = document.querySelectorAll('header p');

const grow = () => {
    const current = window.scrollY;
    titre1.style.fontSize = `${(current*0.001)+1}em`;
        console.log(titre1.style.fontSize);
    titre2.style.fontSize = `clamp(1rem, ${current}px, 5rem)`;
    text.forEach(element => {
        element.style.fontSize = `clamp(1rem, ${current}px, 20rem)`;
    });    
}

window.addEventListener('scroll', grow);

