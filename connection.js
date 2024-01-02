const mongoose = require('mongoose');

const url = "mongodb+srv://anikettyagi228145:1234@cluster0.yggekyb.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    // console.log(result);
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;