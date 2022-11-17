const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// sets schema for 'user' collection
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  gender: String,
  skill_level: Number,
  willing_to_bet: String,
  pdga_number: Number
});

// creats a model for the 'user' collection that will be part of the export
const User = mongoose.model('user', userSchema);

module.exports = User;