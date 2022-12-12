const mongoose = require('mongoose'); // Import mongoose
const User = require('./User'); // Import User model

// Connect to DB
const dbURL = 'mongodb+srv://Rami:jD69ZuCWTfqFHAL@ramicluster.p86xdwa.mongodb.net/mongooseEx?retryWrites=true&w=majority'; // DB URL
mongoose.set('strictQuery', false);
mongoose.connect(dbURL
    , () =>{
    console.log('connected to db');
}, (err) => {
    console.log('error connecting to db', err);
}
)

// const user = new User({name: 'Rami', email: 'rami@email.com'})
// user.save().then(() => {
//     console.log('user saved');
// })

async function run() {
    // const user = new User({name: 'Rami', email: 'rami@email.com'})
    // await user.save();
    const user = await User.create(
        {
            name: 'Baila',
            email: 'rabi@email.com',
            address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zip: 10001},
            hobbies: ['coding', 'reading', 'writing'],
            bestFriend: '6397574f8eab1dedde10e4be',
            // updatedAt: new Date("2/2/2022")
        })
    await user.save();
    console.log(user);
}
run();