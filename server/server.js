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

// app.get('/', (request, response) => {
//     response.send('server is operational!')
// })

app.get('/recent', (request, response) => {
    let authHeader = {
        headers: { Authorization: 'Bearer ' + 'BQDTqeLEbZR0tFzNjgCRwIx-EUGnxo3Yte5Qx6-j1uJGUNArJO3L2q7RZBrus_uB3zgkeB_kSS2ebv9LXieL1sEc8zbhi0vGKqHWuuis5D-lY-K3YGViGj4JO8P12Sbx-UXG_2fFgQL-9MrxkWDk5eKMLnM5jAdl7xgEWPX4gp3oTDtXUIksh3_WeDki-MKylb-v' }
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
        } /* should do response.json once i figure out refresh */)
})

app.listen(8888, () => {
    console.log('Listening to port 8888')
})