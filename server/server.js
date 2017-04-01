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
        headers: { Authorization: 'Bearer ' + 'BQCh4nBzLDy1vt6IP8mC5VkOxTh_v6881ziTecFBzxn7wxfR-wMBer8rUQLE7pYXF4aATdefTYzDdidj0EQSUZpAscH006IZTAZV5dgiUP3LiOapDuvYjRQUgeZU2RGljJc6oeqOPvSNYnAUdwNip0C6YSiekFr0KwnMX73PXT9obT1kqrpRNiR7--Q1ObmKHdc9' }
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