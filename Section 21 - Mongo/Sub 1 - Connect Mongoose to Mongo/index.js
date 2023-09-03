const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:17017/movieApp')
    .then(() => {
        console.log('CONNECTED TO THE MONGO!');
    })
    .catch((e) => {
        console.log(`ERROR ${e}`);
    })