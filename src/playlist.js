import React, { Component } from 'react';
import Song from './song.js';

class Playlist extends Component {

  render() {

    let artists = this.props.playlist.map((element, index) => <div key={index}> {element.artist}, {element.songName} <iframe frameborder="0" allowtransparency="true" key={index} src={'https://embed.spotify.com/?uri=' + element.uri}> </iframe> </div>)
    return (
      <div>
        {artists}
      </div>
    )
  }
}

export default Playlist;
