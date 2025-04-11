const mongoose = require('mongoose');
const autoincrement=require("mongoose-sequence")(mongoose)
const userSchema = new mongoose.Schema({
  UserID: { type: String, required: true, unique: true },  
  Password: { type: String, required: true },               
  Role: { 
    type: String, 
    required: true, 
    enum: ['user', 'admin'] 
  }
});

userSchema.plugin(autoincrement, { inc_field: 'ID' });

const User = mongoose.model('User', userSchema);

module.exports = User;
