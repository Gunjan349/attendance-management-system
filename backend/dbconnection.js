const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(
    err => console.log(err)
);

