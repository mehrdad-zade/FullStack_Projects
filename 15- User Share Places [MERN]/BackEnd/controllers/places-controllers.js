const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const Place = require("../models/place");
const User = require("../models/user");
const mongoose = require("mongoose");
//const getCoordsForAddress = require('../util/location');

/*
let dummy_places = [
	{
		id : 'p1',
		title : 'my house',
		description : "this is my house",
		location : {
			lat : 40.7484474,
			lng : -73.9871516
		},
		address : "New York",
		creator : 'u1'
	}
]
*/

const getPlaceByID = async (req, res, next) => {
  const placeId = req.params.pid; // { pid: 'p1' }
  //used with arrays and dummy data
	/*
	const place = dummy_places.find(p => {
		return placeID === p.id;
	});
	*/
  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a place.',
      500
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError(
      'Could not find a place for the provided id.',
      404
    );
    return next(error);//mandatory for db connections
  }

  res.json({ place: place.toObject({ getters: true }) }); // => { place } => { place: place }
};


const getPlacesByUserID = async (req, res, next) => {
	const userID = req.params.uid;
	/*
	const places = dummy_places.filter(p => {
		return p.creator === userID;
	});
	*/
	let places;
	try{
		places = await Place.find({ creator : userID });
	}catch (err){
		const error = new HttpError("Couldn't find places for this user!", 500);
		return next(error);
	}

	if(!places || places.length === 0){
		//you should use next instead of throw if you work with db. and next requires 'return'
		return next(new HttpError('Could not find places with provided user ID!', 404))
	}
	//res.json({places})//if key and value are the same you can write one, i.e. place
	res.json({ places: places.map(place => place.toObject({ getters: true })) });
};

const createPlace = async (req, res, next) => {
	const errors = validationResult(req);
	if(!errors.isEmpty()){
		//throw new HttpError("Input data is invalid..", 422);
		console.log(errors);
		return next(new HttpError("Input data is invalid..", 422));
	}

	//const {id, title, description, coordinates, address, creator} = req.body;
	const {title, description, address, creator} = req.body;

	/*
	let coordinates;
  	try {
   	 coordinates = await getCoordsForAddress(address);
  	} catch (error) {
    	return next(error);
  	}
  	*/


	const createdPlace = new Place({ //updated this after adding mongoose
		title,
		description,
		address,
		location : {lng : 22, lat:22},
		creator,//note: after adding mongoo db we are using a specific type for this: mongoose.Types.objectId
		image : "https://www.telegraph.co.uk/content/dam/travel/Spark/trailfinders-canada/toronto-skyline-cn-tower.jpg"
	});

	//////
	let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError('Creating place failed, please try again', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id', 404);
    return next(error); //mandatory for db connections: next()
  }

  //dummy_places.push(createdPlace); //need to update for mongoose

  try {
  	//await createdPlace.save(); //await is for asynchronous
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPlace.save({ session: sess });
    user.places.push(createdPlace); //push is a mongoose method here
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Creating place failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ place: createdPlace });//confirmation that a new place was created
};

const updatePlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //throw new HttpError('Invalid inputs passed, please check your data.', 422);
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const { title, description } = req.body;
  const placeId = req.params.pid;

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place.',
      500
    );
    return next(error);
  }

  place.title = title;
  place.description = description;

  try {
    await place.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place.',
      500
    );
    return next(error);
  }

  res.status(200).json({ place: place.toObject({ getters: true }) });
};


const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;

  /*
	if (!dummy_places.find(p => placeID === p.id)){
		throw new HttpError("Coouldn't find a place with that ID!", 404);
	}
	dummy_places = dummy_places.filter(p => placeID !== p.id);
	
	*/

  let place;
  try {
    place = await Place.findById(placeId).populate('creator');
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete place.',
      500
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError('Could not find place for this id.', 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.remove({ session: sess });
    place.creator.places.pull(place);
    await place.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete place.',
      500
    );
    return next(error);
  }

  res.status(200).json({ message: 'Deleted place.' });
};


exports.getPlaceByID = getPlaceByID;
exports.getPlacesByUserID = getPlacesByUserID;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
