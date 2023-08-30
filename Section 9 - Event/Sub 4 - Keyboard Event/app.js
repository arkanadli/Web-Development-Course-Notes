
const input = document.querySelector('input');
// to show the different between key and code,
//  better use code because key for some people they may have change the default lang of their keyboard

// input.addEventListener('keydown', function (e) {
//     console.log(e.key);
//     console.log(e.code);
// })

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('UP!');
            break;
        case 'ArrowDown':
            console.log('DOWN!');
            break;
        case 'ArrowRight':
            console.log('RIGHT!');
            break;
        case 'ArrowLeft':
            console.log('LEFT!');
            break;
        default:
            console.log('IGNORED!');
    }
})