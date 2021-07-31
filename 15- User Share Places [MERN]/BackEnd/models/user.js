const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type : String, required : true },
    email: { type : String, required : true, unique : true },//unique creates a unique identifier for faster email search
    password: { type : String, required : true, minlength : 6 },
    image: { type : String, required : true },
    //places: { type : String, required : true }
    //connecting places with users
    places: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Place'}]
    //ref connects schemas together. reason for array is because 1 user can have multiple places
});

userSchema.plugin(uniqueValidator);//if email doesn't exisits then you can create new user

module.exports = mongoose.model("User", userSchema);