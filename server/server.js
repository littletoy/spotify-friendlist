const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const songController = require('./mongoosedb/songController');

mongoose.connect('mongodb://local/scratch')

//get request dependency
const axios = require('axios');

//might need to do app.use(express.static(path.join(__dirname, someplace where index is)))
app.use(bodyParser.json());

app.get('/', (request, response) => {

})

app.get('/recent', (request, response) => {
    let authHeader = {
        headers: { Authorization: 'Bearer ' + 'BQDu8J8BfcyB3I1zBX9xf0J-ompWfEyk-SAG8F1JXnuakWB7cpicLPE-WlNT4weyoztR54sKqUycMjD8KdkS7udoQ-WlBCKD6jg6dKvgwAPEpRhSDMm26aq7E7H78ZsQvqYPJstnE3Gw8gwDtC0OErHIfeJ4FYjAP94os05EHOyLumLUHpO8D2rP0AzS3UlX_S6A' }
    };

    axios.get('https://api.spotify.com/v1/me/player/recently-played', authHeader)
        .then(data => response.json(data.data.items) /* should do response.json once i figure out refresh */)
})

app.post('/playlist', (request, response) => {
    let friend = request.body.friend;
    let playlist = request.body.playlist;

    response.end('should send request to post req.body');
})

app.listen(8888, () => {
    console.log('Listening to port 8888')
})