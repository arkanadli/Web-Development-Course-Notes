//method
const myMath = {
    PI: 3.123532,
    square: function (num) {
        return num * num
    },
    cubic(num) { //shorthand for function in atributes
        return num ** 3;
    }
}

console.log(myMath.PI);
console.log(myMath.cubic(3));
console.log(myMath.square(2));

//this explanation
const cat = {
    name: 'Gordon Blue',
    color: 'Grey',
    speech() {
        console.log(this);
        console.log(`${this.name} says 'MEOWWWWWW'`) // this is refer into cat object the parent object
    }
}
cat.speech();
const meow2 = cat.speech; //its copy the function, but getting eror with getting name because this is relatively to the parent object
meow2();// this will refer to root parent => window


let sdasd = null;

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("Please Pass a String Next Time!");
    }
}