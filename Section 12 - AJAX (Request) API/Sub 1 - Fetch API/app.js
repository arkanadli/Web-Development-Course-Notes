// fetch('https://api.tvmaze.com/search/shows?q=girls') // fetch always return promises
//     .then((response) => {
//         console.log('Success full resolved', response);
//         //the promises will be resolved after the request is accepted, but the data not yet proceess
//         // response.json().then((data) => { console.log(data) }); // we can do this nested or like this
//         return response.json();
//     })
//     .then((data) => {
//         console.log('Heres your data! : ', data);
//         return fetch('https://api.tvmaze.com/search/shows?q=dragon');// to initiate other fetch
//     })
//     .then((response) => {
//         console.log('Success full resolved req 2', response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log('Heres your data! : ', data);
//     })
//     .catch(e => {
//         console.log("Error : ", e); // catch if there any request got rejected
//     })


//More clean code using async function
const loadSearch = async () => {
    try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=girls')
        const data = await response.json();
        console.log('Heres your Search', data);
        const response2 = await fetch('https://api.tvmaze.com/search/shows?q=Dragon')
        const data2 = await response2.json();
        console.log('Heres your Search', data2);
    } catch (e) {
        console.log(e);
    }
}
loadSearch();