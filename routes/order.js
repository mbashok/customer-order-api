const express = require('express');
const router = express.Router({mergeParams: true});
const OrderController = require('../controllers/order_controller');
const productRouter = require('./product');

// Get all orders for a customer
router.get('/', OrderController.getAllOrders);

// Add a new order for a customer
router.post('/', OrderController.addOrder);

// Update an order
router.put('/:order_id/update', OrderController.updateOrder);

router.use('/:order_id/products', productRouter);


module.exports = router;
