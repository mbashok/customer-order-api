const Product = require('../models/product_model');

// Get all products for a given order_id
getAllProductsOfAnOrder = function(req, res){
	Product.find( {order_id:req.params.order_id}, (err, results)=>{
        if(err){
            console.log('Error: ', err);
            res.status(500).send({message: 'Retrive failed.'});
        }
        else{
            res.status(200).send({products: results});
        }
    });
};

// Add a new product for a given order (order_id)
addProduct = function(req, res){
    let data = req.body;
    data.order_id = req.params.order_id
    const product = new Product(data);
    product.save( (err, result)=> {
        if(err){
            console.log('Error: ', err);
            res.status(500).send({message: 'Save failed.'});
        }
        else{
            res.status(200).send({message: 'Product saved successfully.'});
        }
    });
};

// update product
updateProduct = function(req, res){
    Product.findByIdAndUpdate(req.params.product_id, {$set: req.body}, (err, result)=> {
        if(err){
            console.log('Error: ', err);
            res.status(500).send({message: 'Update failed.'});
        }
        else{
            res.status(200).send({message: 'Product updated successfully.'});
        }
    });
};

module.exports = {
	addProduct: addProduct,
    updateProduct: updateProduct,
    getAllProductsOfAnOrder: getAllProductsOfAnOrder,
};

