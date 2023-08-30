const form = document.querySelector('#formSearch');
const mainPage = document.querySelector('#mainPage');
let isAny = false;
// listener to search button
form.addEventListener('submit', function (e) {
    e.preventDefault();
    reset(mainPage);
    const searchTerm = this.elements['title'].value;//extract value from form, input name title
    search(searchTerm)

})
// function reset mainPage
const reset = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

const getShow = async (id) => {
    const config = { params: { q: id } } // we can add more querries params
    const response = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    console.log(response.data)
    return (response.data);
}

const search = async (id) => {
    try {
        const shows = await getShow(id);
        const ul = document.createElement('ul');
        mainPage.appendChild(ul);
        for (each of shows) {
            console.log(each.show.name)
            const li = document.createElement('li')
            const img = document.createElement('img')
            try {
                img.setAttribute('src', each.show.image.medium)
            } catch (error) {
                img.setAttribute('alt', 'fail to Load')
            }
            li.append(img)
            li.append(each.show.name)
            ul.append(li);
            isAny = true;
        }
        if (isAny === false) {
            const h1 = document.createElement('h1');
            h1.append(`No Result to find : ${id}`);
            mainPage.appendChild(h1);
        }
    } catch (e) {
        console.log('Error', e);
    }
}