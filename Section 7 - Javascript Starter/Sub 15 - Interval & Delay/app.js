console.log('HELLO!!!!...')
//the delay only effect the function that we call back in the first argument setTimeout(callback,time)
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

console.log('GOODBYE !!') // it will print immediately after the web refresh, not waiting for the 3 sec

const id = setInterval(() => { // it will callback the fucntion every 1 second
    console.log(Math.random()*10)
},1000);

// clearInterval(id); //this syntax to turn off the interval
