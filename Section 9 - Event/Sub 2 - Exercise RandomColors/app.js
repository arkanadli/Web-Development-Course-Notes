const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
btn.addEventListener('click', () => {
    let randomCol = randomColor();
    document.querySelector('body').style.backgroundColor = randomCol
    h1.innerText = randomCol
})

const randomColor = () => {
    let randomRed = Math.floor(Math.random() * 255) + 1;
    let randomGreen = Math.floor(Math.random() * 255) + 1;
    let randomBlue = Math.floor(Math.random() * 255) + 1;
    if (randomBlue < 100 && randomGreen < 100 && randomRed < 100) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black'
    }
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
}