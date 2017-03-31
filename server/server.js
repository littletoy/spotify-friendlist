const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

//mongoose.connect('mongodb://local/scratch')

const axios = require('axios');

//might need to do app.use(express.static(path.join(__dirname, someplace where index is)))
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('server is operational!')
})

app.get('/recent', (request, response) => {
    let authHeader = {
        headers: { Authorization: 'Bearer ' + 'BQBGSkkowjBC76XVEKhGuBeAvJZBHHLPtd5gwZ1o5ZKjBd7CAEXDkcnKMA_qh7SUZRtwwhg1wiYRZBZhc2Gqkf63l5mmJw5FTvb73_xqscRuNf8Kdm1pnGtacUZAK9HZhoyDEZM1w_v2OUZePrcmefrGJWNLXvKiwBc4ZoYktd3yBwY--V0-F9IIGHxidv8oACvU' }
    };

    axios.get('https://api.spotify.com/v1/me/player/recently-played', authHeader)
        .then(data => {
            // console.log("artist: ", data.data.items[7].track.artists[0].name)
            // console.log("songName: ", data.data.items[7].track.name)
            // console.log("duration: ", data.data.items[7].track.duration_ms)
            // console.log("uri: ", data.data.items[7].track.uri)
            //data.data.item is an array of object 
            let playlist = []
            for (let i = 0; i < data.data.items.length; i += 1) {
                playlist.push({
                    artist: data.data.items[i].track.artists[0].name,
                    songName: data.data.items[i].track.name,
                    duration: data.data.items[i].track.duration_ms,
                    uri: data.data.items[i].track.uri
                })
            }
            response.json(playlist)
        } /* should do response.json once i figure out refresh */)
})

app.listen(8888, () => {
    console.log('Listening to port 8888')
})