const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/customer_controller');
const orderRouter = require('./order');

// Get all customers
router.get('/', CustomerController.getAllCustomers);

// Get all aggregated products of a customer
router.get('/:id/products', CustomerController.getProducts);

// Add a new customer
router.post('/', CustomerController.addCustomer);

// Include the order routes
router.use('/:id/orders', orderRouter);

module.exports = router;
