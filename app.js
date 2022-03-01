const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);

//ROUTES
app.get('/', (req, res) => {
   res.send('We are on home');
});


//Connect to DB
mongoose.connect(
    'mongodb+srv://testapp:test123@cluster0.ryqmw.mongodb.net/test',
    { useNewUrlParser: true },
    () => console.log('connected to DB!')
);

app.listen(3000);


