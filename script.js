const mongoose = require('mongoose'); // Import mongoose
const User = require('./User'); // Import User model
// use dotenv to hide the mongoURI
require('dotenv').config();
// Connect to DB
const dbURL = process.env.MONGO_URI;
mongoose.set('strictQuery', false);
mongoose.connect(dbURL
    , () =>{
    console.log('connecting to db');
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
    try {
            // const user = await User.create(
        // {
            // name: 'Dido',
            // age: 21,
            // email: 'dido@gmail.com',
            // address: {
            // street: '123 Main St',
            // city: 'New York',
            // state: 'NY',
            // zip: 10001},
            // hobbies: ['coding', 'reading', 'writing'],
            // bestFriend: '6397574f8eab1dedde10e4be',
            // updatedAt: new Date("2/2/2022")
        // })
    // await user.save();
    // const user =  await User.find(
    //     {
    //         age: {$lt: 21},
    //         name: /^K/i
    //     }
    //     );
    const user = await User.where('age').lt(21).where('name').regex(/^K/i)
    // .limit(2).populate({path: 'bestFriend', select: '-_id name email'});
    // user[0].email = 'kaila22@gmail.com';
    // await user[0].save();
    // .select('name age');
    console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}
run();