const mongoose = require('mongoose');

var ProductSchema =  new mongoose.Schema({
	name:{
		type: String,
		required: true,
	},

	quantity:{
		type: Number,
		required: true,
		default: 1
	},

	product_sku: {
		type: String,
		required: true
	},

	order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    },

  	orderDate:{
		type: Date
	},
	
	status: {
		type: String,
		required: true,
		default: 'in_process'
	}

});

module.exports = mongoose.model("Product", ProductSchema);
