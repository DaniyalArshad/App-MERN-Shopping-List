const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/apis/items');

const app = express();

// body-Parser middleware we want to use
app.use(bodyParser.json());

// DB Config
const db = require('./config/key').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/items', items);

/* To connect to Mongo we need to run our server,
which we may deploy on Heroku or run locally on Port 5000 */

const port = process.env.PORT || 5000;

// Now we want our app to listen on that port

app.listen(port, () => console.log(`Server started on port ${port}`));