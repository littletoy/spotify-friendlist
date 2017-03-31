const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  name: {type: String, required: true},
  artist: {type: String, required: true},
  duration : {type: Number, required: true},
  uri: {type: String, required: true}
});

const songModel = mongoose.model('Song', songSchema);

module.exports = songModel;