// Customer schema

const mongoose = require('mongoose');
var CustomerSchema =  new mongoose.Schema({
	firstName:{
		type: String,
		required: true
	},

	lastName:{
		type: String
	},

	gender:{
		type: String,
		required: true
	},

	address:{
		address1: {type: String },
		address2: {type: String },
		city: {type: String },
		state: {type: String },
		country: {type: String }
	}

});

module.exports = mongoose.model("Customer", CustomerSchema);