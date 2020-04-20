const mongoose = require('mongoose');
const uuid =require('uuid');

const { Schema } = mongoose;

const userSchema = new Schema({
id: {
  type: String,
  default: uuid.v1(),
  required: true
},
  name: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});



const user = mongoose.model('User', userSchema);


module.exports = user;


