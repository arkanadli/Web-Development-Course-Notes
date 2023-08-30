const person = {
    firstName: 'Arkan',
    lastName: 'Adli',
    isLoggedIn: true
}

let first = "firstName";

// to recall the value you can do this
console.log(person["firstName"]);
// use var in the bracket so that you can recall something more dynamicly
console.log(person[first])
// or you can simply use dots and the key
console.log(person.isLoggedIn)

// you can add some new key into the object
person.age = 29;
console.log(person)

// exercise 
//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:

let fullAddress = `${restaurant["address"]}, ${restaurant.city}, ${restaurant["state"]} ${restaurant['zipcode']}`;
console.log(fullAddress)

// Objects + Arrays 
const student = {
    name: "Arkan",
    class: "Computer Science",
    exam: {
        midTerm: 90,
        lastTerm: 100
    },
    hobby: ["football", "voley", "billiard"]
}




// Arrays + Objects
const shoppingCart = [
    {
        product: "Jenga Card",
        price: 2.49,
        quantity: 1
    },
    {
        product: "Jenga Box",
        price: 3.49,
        quantity: 2
    },
    {
        product: "Poker Card",
        price: 2.99,
        quantity: 1
    }
]

for (let i = 0; i < shoppingCart.length; i++) {
    console.log(i, shoppingCart[i].product);
}

shoppingCart.push({
    product: "Jenga Card",
    price: 2.49,
    quantity: 1
});

console.log(shoppingCart)