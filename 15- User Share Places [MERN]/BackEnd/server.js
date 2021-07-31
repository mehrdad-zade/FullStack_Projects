const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');//import the middlewhere
const usersRoutes = require('./routes/users-routes');//import the middlewhere
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json()); //use this before any middlewhere so that you can parse it using req


//if you want to be directed to PlacesRoutes through a specific add give sth like /api/places
app.use('/api/places', placesRoutes);//instead of putting the logic for places in app.js we imported it
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

mongoose
	.connect("mongodb+srv://mehrdadZade:qeqdop-jAjziw-5wynje@sharedplaces-cluster-kf8yl.mongodb.net/SharedPlaces?retryWrites=true&w=majority")
	.then( () => {
		console.log("\n**********Mongoose is connected*********************************"); 
		app.listen(5000); 
		console.log("**********Server is up         *********************************"); 
		} )
	.catch( err => {console.log(err)} );

//qeqdop-jAjziw-5wynje









