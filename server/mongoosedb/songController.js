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
      res.render('need url to send for err', { error: 'This is an error' });
    } else {

    //   Song.findOne({ name: req.body.name }, (err, result) => {
    //     let localsid = result._id;
    //     sessionController.startSession(localsid);
    //     res.cookie('ssid', result._id);
    //     res.redirect('/secret');
    //   });
    }
  });
};