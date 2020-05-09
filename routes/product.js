const express = require('express');
const router = express.Router({mergeParams: true});
const ProductController = require('../controllers/product_controller');

// Get all products for a give order_id
router.get('/', ProductController.getAllProductsOfAnOrder);

// Add a new product for a given order
router.post('/', ProductController.addProduct);

// Get a project details for a give project id
// router.get('/:id/tasks/:task_id', OrderController.getOrder);

// Edit/update a prject detail
router.put('/:product_id/update', ProductController.updateProduct);


module.exports = router;