const Order = require('../models/order_model');

getAllOrders = function(req, res){
    console.log("req.params.id", req.params.id);
	Order.find( {customer_id:req.params.id}, (err, results)=>{
        if(err){
            console.log('Error: ', err);
            res.status(500).send({message: 'Retrive failed.'});
        }
        else{
            res.status(200).send({orders: results});
        }
    });
};

addOrder = function(req, res){
    const order = new Order({
        customer_id: req.params.id,
        orderDate: req.body.orderDate,
        description: req.body.description,
        status: req.body.status
    });
    order.save( (err, result)=> {
        if(err){
            console.log('Error: ', err);
            res.status(500).send({message: 'Save failed.'});
        }
        else{
            res.status(200).send({message: 'Order saved successfully.'});
        }
    });
};

updateOrder = function(req, res){
    Order.findByIdAndUpdate(req.params.order_id, {$set: req.body}, (err, result)=> {
        if(err){
            console.log('Error: ', err);
            res.status(500).send({message: 'Update failed.'});
        }
        else{
            res.status(200).send({message: 'Order updated successfully.'});
        }
    });
};

module.exports = {
	getAllOrders: getAllOrders,
	addOrder: addOrder,
    updateOrder: updateOrder
};

