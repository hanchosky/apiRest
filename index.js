const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const postRoute = require('./routes/post.js');
app.use('/servicios', postRoute);

mongoose.connect('mongodb+srv://hansolavet:AvlaW6BVwcp9AdP7@api01.0j5gidv.mongodb.net/mi-post?retryWrites=true&w=majority&appName=Api01', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

app.listen(15000);