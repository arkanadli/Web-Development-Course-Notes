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

//create schema more advance and adding some validation
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // need to be filled when we try to upload to the databases
    },
    price: {
        type: Number,
        min: 0
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ["S", "M", "L"]
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: [],
    }
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: "HOLY Bike ", price: '219.9' }); // works well even the price not in number format
// const bike = new Product({ name: "Sukuna Bike " }); // works well even when the price do not included in the object
// const bike = new Product({ price: '299 ' }); // not working when we try to save it to db, because there is a requirement that must fullfiled

bike.save()
    .then((data) => {
        console.log('Succesfully created Product');
        console.log(data);
    })
    .catch((error) => {
        console.log("Failed To Created");
        console.log(error);
    })

const catagoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true
    }
});
const othersSchemaTypes = new mongoose.Schema({
    name: {
        type: String,
        required: true, // need to be filled when we try to upload to the databases

    },
    price: {
        type: Number,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [catagoriesSchema]

})


// UPDATES WITH VALIDATORS
// we must include option to remind the validators
// it will fail because the validator check the minimum price is 0
// Product.findByIdAndUpdate("64f58b55192263297e778805", { price: -300 }, { runValidators: true })
//     .then((data) => {
//         console.log('Succesfully Updated Product');
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("Failed To Updated");
//         console.log(error);
//     })