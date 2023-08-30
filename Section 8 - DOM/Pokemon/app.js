// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 150; i++) {
    let pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')
    pokemon.style.width = '100px'
    const label = document.createElement('span');
    label.innerText = `#${i}`

    let pokemonImg = document.createElement('img');
    pokemonImg.style.width = '100%';
    pokemonImg.src = `${baseURL + i}.png`
    pokemon.appendChild(pokemonImg);
    pokemon.appendChild(label);

    container.insertAdjacentElement('beforeend', pokemon)
}