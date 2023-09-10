const mongoose = require('mongoose');
const Product = require('./product')
const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm Must Have a Name!']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email Required!']

    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

farmSchema.post('findOneAndDelete', async function (farm) {
    // farm.products = [31232141,321432,543543]
    if (farm.products.length) {
        // if the current deleted farm have a products, it will delete the products in those farm
        const respo = await Product.deleteMany({ _id: { $in: farm.products } }) // where id is an id in farm.products[]
        console.log(respo);
    }
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;