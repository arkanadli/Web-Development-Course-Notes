// first scope = function scope
let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Moon';
    console.log(bird)
    // it will output great blue moon because the var bird got reassign in the local scope
}
birdWatch();
console.log(bird);
// it will output Scarlet Macaw because the var bird in birdwatch is local var

// second scope = block scope (if) (for)
let radius = 8;
if (radius > 0) {
    const PI = 3.14;
    let circ = 2 * PI * radius;
}
console.log(PI); // undefined
console.log(circ); // undefined

for (let i = 0; i < 5; i++) {
    let msg = 'asdklakdlsakd';

}
console.log(msg); //undefined

//third scope = lexical scope
function bankRobbery() {
    const heroes = ['Spideman', 'Superman'];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase}`)
        }
    }
    cryForHelp();
} // it will output list of the hero
// summary : you can use var in the parent function to use it in inner function.