const mongoose = require('mongoose');

// :: Connect mongoose to the mongodb in port 27017 
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log('CONNECTED TO THE MONGO!');
    })
    .catch((e) => {
        console.log(`ERROR ${e}`);
    })

// :: Create Schema (type of object value) 
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

// :: Create Model using the schema we have created before
// :: The naming model must capitalize so that mongo db automate create collection movies (becoma lower case and plural)
const Movie = mongoose.model('Movie', movieSchema);

// :: Create Object by model we have created before
const asmadeus = new Movie({ title: 'Asmadeus', year: 2003, score: 9.2, rating: 'R' })

// :: To Save in collection, we can save the object we have create, or we can insert data
// asmadeus.save(); // to save it under the databases with collection movies auto generate before

// Movie.insertMany([
//     {title: 'Asmadeus',year: 2003,score : 9.2,rating :'R'},
//     {title: 'Prometheus',year: 2013,score :7.2,rating :'M'},
//     {title: 'Jilafurgal',year: 2008,score : 9.5,rating :'M'},
//     {title: 'Autobots',year: 2009,score : 7.4,rating :'R'},
//     {title: 'Prince Aslan',year: 2012,score : 6.7,rating :'R'},
// ])

// :: Use this in RPL node ===>
// Movie.findById("64f56508f8768f34e6b448c3").then(m =>console.log(m)) // it will return {object}
// Movie.find({_id: '64f56508f8768f34e6b448c3'}).then(m =>console.log(m)) // it will return [{object}]

// to update behind the scene
// const res = await Movie.updateOne({_id: '64f56508f8768f34e6b448c3'}, {year : 2004})

// to update and use it in web
// const dataUpdated = await Movie.findOneAndUpdate({_id:'64f56508f8768f34e6b448c3'} ,{year : 2002}, {new:true , runValidators:true})

// to delete bts
// Movie.deleteOne({title: 'Jilafurgal'}).then(res => console.log(res))

// to update and use it in web
// Movie.findOneAndDelete({title : 'asddsa'}).then(resolve => console.log(resolve))