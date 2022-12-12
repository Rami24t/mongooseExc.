const mongoose = require('mongoose'); // Import mongoose

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: Number
});

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    // email: {type: String},
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    bestFriend: mongoose.SchemaTypes.ObjectId ,
    hobbies: [String],
    address: addressSchema,
    // address: {
    //     street: String,
    //     city: String,
    //     state: String,
    //     zip: Number
    // }
});

const User = mongoose.model('User', userSchema);

module.exports = User;