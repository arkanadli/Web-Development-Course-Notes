const singSong = function () {
    console.log("DO")
    console.log("RE")
    console.log("MI")
    console.log("FA")
    console.log("SO")
}

singSong();

const greet = function (name) {
    console.log(`Hei ${name}!`)
}

function repeat(str, rep) {
    let sumString = "";
    for (let i = 0; i < rep; i++) {
        sumString += str;
    }
    console.log(sumString)
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return NaN;
    }
    // after the return, anything below the code doesnt get read by the machine, like breaks syntax
    return x + y;
}

let sum = add(5, 6);
console.log(sum);

function returnDay(day) {
    let daysOfWeek = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    }
    let keysDay = Object.keys(daysOfWeek);
    for (let key of keysDay) {
        if (day == key) {
            return daysOfWeek[day]
        }
    }
    return null
}