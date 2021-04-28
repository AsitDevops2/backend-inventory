const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,  
    description: String,
    userId: Number   
});

module.exports = mongoose.model('category',CategorySchema);

