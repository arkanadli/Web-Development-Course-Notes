const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then((data) => {
        console.log("Connected into Databases");
    })
    .catch((err) => {
        console.log('Failed To Connect');
        console.log(err);
    });

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})
// The meaning of the code below is so that we can access the Arkan.fullname (or the atributes that now even in the database!)
// We can use it for adrress, name, and etc
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

// Middle Were SEctioN!
personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("About To Save");
    console.log(this.fullName);
})

personSchema.post('save', async function () {
    console.log('Post SAVED!');
})

const Person = mongoose.model('Person', personSchema);

const Arkan = new Person({ first: 'Arkan', last: 'Adli' })



