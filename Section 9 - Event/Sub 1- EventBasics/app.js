
const v2 = document.querySelector('#v2');

v2.onclick = function () {
    console.log('You Clicked Me')
    console.log('It Works!')
}

function scream(event, xx) {
    console.log('DONT CLICK MEE!!!')
    console.log('AAAAAAAAAAA!')
    console.dir(event)
    console.log(xx)
}

v2.onmouseenter = scream;

document.querySelector('h1').onclick = function () { console.log('I AM GROOTT!') }
document.querySelector('h1').onclick = () => { console.log('I AM GROOTT!') }

// it is better to use this kind of syntax!!
const v3 = document.querySelector('#v3');
v3.addEventListener('click', scream('xx')); // looks the different in output
v3.addEventListener('click', e => {
    scream(e, 'xx');
});
// v3.addEventListener('mousedown', scream)
// v3.addEventListener('mouseup', scream)

function twist() {
    console.log('TWIST!');
}
function shout() {
    console.log('SHOUT!!');
}

const tas = document.querySelector('#tas');

tas.onclick = twist;
tas.onclick = shout;// it will override
// you must do like this
tas.addEventListener('click', twist);
tas.addEventListener('click', shout); // it will add and not ovveride