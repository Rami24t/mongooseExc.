const mongoose = require('mongoose'); // Import mongoose

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: Number
});

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 0,
        max: 150,
    },
    email: {
        type: String,
        lowercase: true,
        validate: {
                validator: function(v) { // v is the value of the email
                    return v.endsWith('yahoo.com') || v.endsWith('gmail.com');
                },
                message: 'Email must end with yahoo.com or gmail.com',
            },
        required: [true, 'Email is required'],
        },
    bestFriend:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    hobbies: [String],
    address: addressSchema,
    // address: {
    //     street: String,
    //     city: String,
    //     state: String,
    //     zip: Number
    // }
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now
    // },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;