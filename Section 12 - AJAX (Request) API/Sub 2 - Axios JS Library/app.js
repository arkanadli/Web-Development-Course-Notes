axios.get('https://api.tvmaze.com/search/shows?q=girls')
   .then((res) => {
      console.log("response : ", res); // we already can access the data in properties data
      console.log(res.data);
   })
   .catch((e) => {
      console.log("ERRORR ! :", e);
   })

// More cleaner code using Async
const loadSearch = async (id) => {
   try {
      const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${id}`)
      console.log(res.data);
   } catch (e) {
      console.log('ERROR', e);
   }
}

const newDadJoke = async () => {
   try {
      const config = { headers: { Accept: 'application/json' } };
      const response = await axios('https://icanhazdadjoke.com', config)
      console.log(response.data.joke)
   } catch (err) {
      console.log('Error', err);
   }
} 