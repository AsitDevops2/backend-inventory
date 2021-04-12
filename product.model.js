const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    brand: String,
    description: String,
    quantity: Number,
    price: Number,
    category: String,
    supplier: String
});

module.exports = mongoose.model('Products', ProductSchema);