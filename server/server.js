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
        headers: { Authorization: 'Bearer ' + 'BQAmunAJqGJygsdb18TSxVMe5YbxAnVU7cdJVqSn7X0zBKbF1R-hYc_ObJZL8SRhWlZqPTejZ4ffUZGXJxziJmqoqu-wHSA_dDMxVEbv68nBaRw7HEwYBjXE5SbFlFEk_XqTQwLegcJf36apTGUS4bjyrNwTR84AX3M8V3dH6_tOXyW-F6pGhfMI6g38Qz51SMq7' }
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