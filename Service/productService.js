const {from} = require('rxjs');
let Product = require('../models/product');
class ProductService {
    constructor() {

    }

    add(productObj) {      
        let newProduct = new Product(productObj);
        return newProduct.save();

    }

    getOne(queryObj) {
        return from(Product.findOne(queryObj));
    }

    getAll(queryObj) {
        return from(Product.find(queryObj));
    }

    update(id,updateObj) {
        return from(Product.update({_id:id},{"$set":updateObj}));
    }   

    delete(queryObj) {
      return from(Product.findByIdAndDelete(queryObj))

    }
    getChartData(queryObj) {
        return from(Product.aggregate([queryObj]));
    }
}

module.exports = ProductService;