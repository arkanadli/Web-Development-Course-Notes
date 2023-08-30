
const password = prompt("Please Enter Your Password!");

if ((password.length <= 6) && password.indexOf(' ') !== -1) {
    console.log('Your Password must be more than 6 char and not have space character inside')
} else if (password.length <= 6) {
    console.log('Your Password is Too Short');
} else if (password.indexOf(' ') !== -1) {
    console.log('Your Password Must not be included by space character')
} else {
    console.log('Password Accepted')
}


console.log("Your Script End");