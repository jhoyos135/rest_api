const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/customersgo', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/api', routes);

app.use( (err, req, res, next) => {

    res.status(422).send({error: err.message});

});


app.listen(process.env.port || 4000, function() {
    console.log('listening to port 4000');
});