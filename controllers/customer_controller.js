const Customer = require('../models/customer_model');
const Order = require('../models/order_model');
const Product = require('../models/product_model');

getAllCustomers = function(req, res){
	Customer.find( {}, (err, results)=>{
		if(err){
    		console.log('Error: ', err);
    		res.status(500).send({message: 'Retrive failed.'});
    	}
    	else{
    		res.status(200).send({customers: results});
    	}

	});
};

getProducts = async function(req, res){
    try{
        let orders = await Order.find({customer_id:req.params.id}, {_id:1});
        let orderIds = orders.map(item=>item._id);
        let products = await Product.aggregate([
            { $match: {order_id:{$in:orderIds} } },
            {
                $group:{
                    _id: {product_sku: "$product_sku", name: "$name"},
                    totalQuantity: {
                        $sum: "$quantity"
                    },
                    order_id: {$push: "$order_id"}
                }
            },
            //{ $project: {_id:1, totalQuantity:1, name:"$name" } }
        ]);
        res.status(200).send({products: products});
    }
    catch(err){
        console.log('Error: ', err);
        res.status(500).send({message: 'Retrive failed.'});
    }
}

addCustomer = function(req, res){
    const customer = new Customer(req.body);
    customer.save()
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err =>{
        console.log('Error: ', err);
        res.status(500).send({message: 'Save failed.'});
    });
};

// getCustomer = function(req, res){
// 	Customer.findOne( {_id:req.params.id}, (err, result)=>{
//         if(err){
//             console.log('Error: ', err);
//             res.status(500).send({message: 'Retrive failed.'});
//         }
//         else{
//             res.status(200).send(result);
//         }
//     });
// }

module.exports = {
	getAllCustomers: getAllCustomers,
	addCustomer: addCustomer,
    getProducts: getProducts
};

