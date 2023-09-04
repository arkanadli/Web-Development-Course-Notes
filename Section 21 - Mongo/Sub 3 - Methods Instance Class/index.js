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

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save(); // because this.save is needed to be async
}

productSchema.methods.addCategories = function (cat) {
    this.categories.push(cat);
    return this.save();
}

const Product = mongoose.model('Product', productSchema);



const gitRunCommand = async () => {
    const foundProduct = await Product.findOne({ price: 29.9 });
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategories('Holy Items');
    console.log(foundProduct);
}
gitRunCommand(); 