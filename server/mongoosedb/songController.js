const Song = require('./songModel');

const songController = {};

songController.getAllSongs = (next) => {
  Song.find({}, next);
};

songController.createSong = (req, res) => {

  let song = new Song({
    name: req.body.name,
    artist: req.body.artists,
    duration: req.body.duration_ms,
    uri: req.body.uri
  });

  song.save(err => {
    if (err) {
      res.render({ error: 'This is an error. You are a dumbass' });
    } 
  });
};