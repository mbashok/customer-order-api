// app.js
// Initialize the app

const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const customerRouter = require('./routes/customer');

// Database connection
mongoose.connect(config.mongodb.URI, { useNewUrlParser: true }, function(err){
	if(err){
		console.log("Error connecting to database", err);
	}
	else{
		console.log("Database connected successfully");
	}
});

// Setting up CORS
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res, next){
	res.send("Customer-Order App APIs");
});

// Routes for customer resource
app.use('/customers', customerRouter);


// start server
app.listen(3001, () => console.log('Customer Order API is listening to port: 3001') );