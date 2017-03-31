const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const songController = require('./mongoosedb/songController')

mongoose.connect('mongodb://local/scratch')


//might need to do app.use(express.static(path.join(__dirname, someplace where index is)))
app.use(bodyParser.json());


app.get('/', (request, response) => {
    //get json for us to use
    response.send('server is operational');
})

app.get('/friends', (request, response) => {
    //should receive information from the database
    response.send('this is for your friends...');
})

app.post('/playlist', (request, response) => {
    let friend = request.body.friend;
    let playlist = request.body.playlist;

    response.end('should send request to post req.body');
})

app.listen(8888, ()=> {
    console.log('Listening to port 8888')
})