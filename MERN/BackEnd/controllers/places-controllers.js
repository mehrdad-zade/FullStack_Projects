const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');

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

const getPlaceByID = (req, res, next) => {
	const placeID = req.params.pid;
	const place = dummy_places.find(p => {
		return placeID === p.id;
	});
	console.log("this is a get rout");

	if(!place){
		throw new HttpError('Could not find a place with provided user ID!', 404);
	}

	res.json({ place : place });
};


const getPlacesByUserID = (req, res, next) => {
	const userID = req.params.uid;
	const places = dummy_places.filter(p => {
		return p.creator === userID;
	});
	if(!places || places.length === 0){
		//you should use next instead of throw if you work with db. and next requires 'return'
		return next(new HttpError('Could not find places with provided user ID!', 404))
	}
	res.json({places})//if key and value are the same you can write one, i.e. place
};

const createPlace = (req, res, next) => {
	const errors = validationResult(req);
	if(!errors.isEmpty()){
		throw new HttpError("Input data is invalid..", 422);
	}

	const {id, title, description, location, address, creator} = req.body;

	const createdPlace = {
		id : uuid(),
		title,
		description,
		location,
		address,
		creator
	};

	dummy_places.push(createdPlace);

	res.status(201).json({place : createdPlace}); //confirmation that a new place was created
};

const updatePlace = (req, res, next) => {
	const errors = validationResult(req);
	if(!errors.isEmpty()){
		throw new HttpError("Input data is invalid..", 422);
	}

	const placeID = req.params.pid;
	const {id, title, description} = req.body;//only allow modification of title and description
	const updatedPlace = {...dummy_places.find(p => placeID === p.id)};
	const placeIndex = dummy_places.findIndex(p => placeID === p.id);
	updatedPlace.title = title;
	updatedPlace.description = description;

	dummy_places[placeIndex] = updatedPlace;

	res.status(200).json({place:updatedPlace});
};

const deletePlace = (req, res, next) => {
	const placeID = req.params.pid;
	if (!dummy_places.find(p => placeID === p.id)){
		throw new HttpError("Coouldn't find a place with that ID!", 404);
	}
	dummy_places = dummy_places.filter(p => placeID !== p.id);

	res.status(200).json({message:'deleted place..'});
};



exports.getPlaceByID = getPlaceByID;
exports.getPlacesByUserID = getPlacesByUserID;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
