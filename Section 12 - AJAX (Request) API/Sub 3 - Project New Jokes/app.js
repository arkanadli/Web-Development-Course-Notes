
const newDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const response = await axios('https://icanhazdadjoke.com', config)
        return (response.data.joke)


    } catch (err) {
        console.log('Error', err);
    }
}

const displayNewJoke = async () => {
    const joke = await newDadJoke();
    const li = document.createElement('li');
    const ul = document.querySelector('ul');
    li.append(joke);
    ul.append(li);
}

const btnNewJokes = document.querySelector('#btnNewJokes');
btnNewJokes.addEventListener('click', () => {
    displayNewJoke()

})