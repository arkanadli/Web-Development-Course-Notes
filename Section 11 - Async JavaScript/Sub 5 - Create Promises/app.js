const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {

            if (rand <= 0.7) {
                resolve(`your data here : ${url}`)
            } else {
                reject('FAILED TO FULLFILED')
            }
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('DONE REQUEST FULLFILED');
        console.log(data);
        return fakeRequest('arkan/adli');
    })
    .then((data) => {
        console.log('DONE REQUEST FULLFILED');
        console.log(data);
        return fakeRequest('arkan/adli');
    })
    .then((data) => {
        console.log('DONE REQUEST FULLFILED');
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })


//simplify delayed color change so its not nested too much!!
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(`change backgroudn into : ${color}`);
        }, delay)
    })
}

delayedColorChange('green', 2000)
    .then((data) => {
        console.log(data);
        return delayedColorChange('yellow', 500) // we use return to check if its resolve or not, so we can catch it in the end
    })
    .then((data) => {
        console.log(data);
        return delayedColorChange('magenta', 2500)
    })
    .then((data) => {
        console.log(data);
        return delayedColorChange('green', 500)
    })
    .then((data) => {
        console.log(data);
        return delayedColorChange('red', 2500)
    })
    .then((data) => {
        console.log(data);
    })
    .catch(() => {
        alert('Your Browser Do Not Support Changing Background')
    })