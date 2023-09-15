const mongoose = require('mongoose');

// :: !!NOTE we must set the methods and virtual before the model initialize



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


// create methods for single object
productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save(); // because this.save is needed to be async
}

productSchema.methods.addCategories = function (cat) {
    this.categories.push(cat);
    return this.save();
}

// create statics for entire model
productSchema.statics.filter = function (filter) {
    if (filter.length == 0) {
        console.log("FIND ALL DATA, NO FILTER");
        return this.find();
    } else if (filter) {
        console.log("FIND DATA WITH FILTER :");
        console.log(filter);
        return this.find({ categories: { $in: filter } })
    }
}

const Product = mongoose.model('Product', productSchema);



const gitRunCommand = async () => {
    const foundProduct = await Product.findOne({ price: 29.9 });
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategories('Holy Items');
    console.log(foundProduct);

}

const sortFilter = [];
sortFilter.push('Holy Items');
sortFilter.push('Rock')
Product.filter(sortFilter).then(res => { console.log(res) })

// gitRunCommand(); 