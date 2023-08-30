const randomColor = () => {
    let randomRed = Math.floor(Math.random() * 255) + 1;
    let randomGreen = Math.floor(Math.random() * 255) + 1;
    let randomBlue = Math.floor(Math.random() * 255) + 1;
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
}
const colorize = function () {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
};

const buttons = document.querySelectorAll('button');
for (btn of buttons) {
    btn.addEventListener('click', colorize);
}
const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
}

