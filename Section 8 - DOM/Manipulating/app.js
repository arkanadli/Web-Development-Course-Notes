const allLinks = document.querySelectorAll('a');

// different between innerText and textContent is innertext sensitive with display none (hiding element)

for (let link of allLinks) {
    link.innerText = "I Am Link!"//it only change the innertext
    // link.innerHTML = "<h2>I Am Big Link!</h2>"// it change the html inside the link
}


const textInput = document.querySelector('input[type ="text"]');
textInput.type = 'color';
// or you can change it like this =>
textInput.setAttribute('type', 'password')

console.log(textInput.getAttribute('type'))

const heading1 = document.querySelector('h1');
heading1.style.color = 'green';
heading1.style.border = '1px solid grey ';

// ORRRRRR it is more commonly to use add class or remove class, or even toggle class

const h2 = document.querySelector('h2');
h2.classList.add('magenta');

h2.classList.add('border');
h2.classList.remove('border')// to delete class, or you can just toggle it so it doesnt include

h2.classList.toggle('magenta'); // set it to false
h2.classList.toggle('magenta'); // set it to true

const unList = document.querySelectorAll('li');

for (list of unList) {
    list.classList.toggle('highlight') // even before class was not in the element yet we can toggle it to add
}

// choosing element next/prev siblings, parents and child

console.dir(h2.parentElement) // div toc
console.dir(allLinks[1].nextElementSibling); //allLinks[2]

// Making new element and placing it in page but in somesort of parent element with append it can place more than 1 element
const newB = document.createElement('b');
newB.innerText = 'HI !!!!!!';

const p = document.querySelector('p');
// p.append(newB); //to place it after the value element parent p
p.prepend(newB); // to place it before the value element parent p

// placing it in relatively position, not just inside the target, but more powerfull
const h3 = document.createElement('h3');
h3.append('IM h3', ':> MORE TEXT!');
heading1.insertAdjacentElement("afterend", h3); //place it after the element heading end.

// remove element 
// h3.remove();