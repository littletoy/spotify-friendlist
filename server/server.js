const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

//use spotifywebapi call
const SpotifyWebApi = require('spotify-web-api-node');

//might need to do app.use(express.static(path.join(__dirname, someplace where index is)))
app.use(bodyParser.json());


app.get('/', (request, response) => {
    //get json for us to use
    response.send('server is operational');
})

app.get('/recent', (request, response) => {
    let spotifyApi = new SpotifyWebApi({
        clientID: 'badc2d41af2d4f6dba8abe33ef73260b',
        clientSecret: 'ad3d1486a35445319bd622c60ec690f1',
    });

    spotifyApi.setAccessToken('BQCLDyo0yiZeV3RGP0enoz_tR0Ay1xaJ760LDA1iF-dm6IzfuYE_UbNPDw37-ZR4aBMi2BbcW9AP0rLPH6wm1DXIHPBF2jY25WG3AVfrUJgOgsgjKHSGoTTEKWyyLU7-1PLwB_v3ddEGMe0VPzfT8myRArQM0T-fXxU7uj78EtOax_G3O1PwzHJ85OtGja3_rLB9');

    response.send(data);
})

app.post('/playlist', (request, response) => {
    let friend = request.body.friend;
    let playlist = request.body.playlist;

    response.end('should send request to post req.body');
})

app.listen(8888, ()=> {
    console.log('Listening to port 8888')
})