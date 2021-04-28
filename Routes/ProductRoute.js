const router = require('express').Router()
const ProductService = require('../Service/productService');
const productService = new ProductService();
const CategoryService = require('../Service/category');
const categoryService = new CategoryService();
const cors = require('cors');
const product = require('../models/product');



           
 


router.post('/add', function (req, res, next) {
    productService.add(req.body)
        .then(() => res.status(200).json({
            success: true
        }))
        .catch((err) => next(err));
});

router.get('/list', (req, res, next) => {
    const query = {};
    productService.getAll(query).subscribe(
        (data) => res.status(200).json(data),
        (err) => next(err), null);

});

router.get('/byId/:id',cors(),  (req, res, next) => {
    const id = req.params.id;
    productService.getOne({_id: id}).subscribe(
        (data) => res.status(200).json(data),
        (err) => next(err),
        null);

});

router.get('/category/findAll', (req, res, next) => {
    const query = {};
    categoryService.getAll(query).subscribe(
        (data) => res.status(200).json(data),
        (err) => next(err), null);

});

router.post('/category/addCategory', function (req, res, next) {

    categoryService.add(req.body)
        .then(() => res.status(200).json({
            success: true
        }))
        .catch((err) => next(err));
});

router.put('/updateProduct/:id', (req, res, next) => {
    let id = req.params.id;
    let product = req.body;
    delete product._id;
    product.quantity = Number(product.quantity);
    productService.update(id, product)
        .subscribe(
            (data) => res.status(200).json(data),
            (err) => next(err), null);

});

router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    // console.log(id);
    productService.delete(id).subscribe(
        (data) => { res.status(200).json({ message: 'product deleted successfully' }) },
        (err) => next(err), null);
});

router.get('/charts', (req, res, next) => {
    const query ={"$group":{
        _id:"$category",
        quantity:{"$sum":"$quantity"},
        product:{"$first":"$name"},
      }
     };
    productService.getChartData(query).subscribe(
        (data) => res.status(200).json(data),
        (err) => next(err), null);

});

module.exports = router;