const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const User = require('../models/user');

/*
const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Mehrdad Zade',
    email: 'mehrdad.azh@gmail.com',
    password: 'test123'
  }
];
*/

const getUsers = async (req, res, next) => {
  //res.json({ users: DUMMY_USERS });
  //res.json({ users : User.})
  let users;
  try{
    users = await User.find({}, '-password');
  }catch(err){
    return next(new HttpError("Couldn't find the user..",500));
  }

  res.json({ users : users.map(u => u.toObject({ getters : true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  /*
  if(!errors.isEmpty()){
    throw new HttpError("Input data is invalid..", 422);
  }
  */

  if (!errors.isEmpty()) {
    return next( //this is required because mongoose connection is asynchronus
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  
  const { name, email, password } = req.body;
  /*
  const hasUser = DUMMY_USERS.find(u => u.email === email);
  if (hasUser) {
    throw new HttpError('Could not create user, email already exists.', 422);
  }
  */

  //if user exists then prevent duplications..
  let hasUser;
  try{
    hasUser = await User.findOne({email : email});
  }catch(err){
    const error = new HttpError("Wasn't able to sign up, please try again later", 500);
    return next(error);
  }

  if(hasUser){
    const error = new HttpError("User exists already, please sign..", 422);
    return next(error);
  }
  
  //if user doesn't exist then sign them up..
  /*
  const createdUser = {
    id: uuid(),
    name, // name: name
    email,
    password
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({user: createdUser});
  */

  const createdUser = new User({
    name,
    email,
    image: 'https://live.staticflickr.com/7631/26849088292_36fc52ee90_b.jpg',
    password,
    places: []//initialize the place with an empty array, because 1 user can have multiple places
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({user: createdUser.toObject({ getters: true })});


};

const login = async (req, res, next) => {
  const { email, password } = req.body;

/*
  const identifiedUser = DUMMY_USERS.find(u => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError('Could not identify user, credentials seem to be wrong.', 401);
  }
*/
let identifiedUser;
try{
  identifiedUser = await User.findOne({ email : email });
}catch(err){
  const error = new HttpError("couldn't find the email/password, please try again or signup!", 401);
  return next (error);
}
if (!identifiedUser || identifiedUser.password !== password) {
  return next(new HttpError('Could not identify user, credentials seem to be wrong.', 401));
}

  res.json({message: 'Logged in!'});
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
