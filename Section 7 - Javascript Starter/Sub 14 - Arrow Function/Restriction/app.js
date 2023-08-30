// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: () => {
//         console.log(this)
//         return `${this.firstName} ${this.lastName}` //it will refer to the window
//     },
//     delayShout: () => {
//         setTimeout(() => {
//             console.log(this)//it will refer to the window because the this will be to the main parrent
//         }, 3000)
//     }
// }

// why causing this refer to window? 
// because the arrow function does skip the curent parent to 1 parent above

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        console.log(this)
        return `${this.firstName} ${this.lastName}`
    },
    delayShout: function () {
        setTimeout(() => {
            console.log(this.fullName())//it will refer to the function, because it skip 1 parent bcs the arrow
        }, 3000)
    }
}

// summary you must use regular function to state methods!