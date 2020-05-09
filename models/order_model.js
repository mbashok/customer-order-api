const mongoose = require('mongoose');
var OrderSchema =  new mongoose.Schema({

	customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    },

  	orderDate:{
		type: Date
	},

	description:{
		type: String
	}, 
	
	status: {
		type: String,
		required: true,
		default: 'in_process'
	}

});

module.exports = mongoose.model("Order", OrderSchema);
