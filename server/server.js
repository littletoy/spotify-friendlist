const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

//mongoose.connect('mongodb://local/scratch')

const axios = require('axios');

//might need to do app.use(express.static(path.join(__dirname, someplace where index is)))
app.use(express.static(path.join(__dirname, './../www')))

app.use(bodyParser.json());

app.get('/recent', (request, response) => {
    let authHeader = {
        headers: { Authorization: 'Bearer ' + 'BQD4EwFWUZqZMTESv1dEn3XU2g0U-5qZHdlo1daRVF3TGdDX2UQmtIGRFpsIUz13dCHikz0kxxxbgxkuTBkX5unv18jTwwZwP8z5Z725G4PBY28pMtDbRrD9YmpHVkVzDkGH0ZYuqyHTU2yz1y8Me95AocEj3w5usNKGfJFgoAbRNn2mibstMvmwZ9iMQ9b9r2SJ' }
    };

    axios.get('https://api.spotify.com/v1/me/player/recently-played', authHeader)
        .then(data => {
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
        })
})

app.listen(8888, () => {
    console.log('Listening to port 8888')
})