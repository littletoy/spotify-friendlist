import React, { Component } from 'react';
import Song from './song.js';

class Playlist extends Component {

  render() {
    console.log('this is from the playlist.js',this.props.playlist[0])

    // let artists = function mapArtist(arr) {return arr.map((element, index) => <Song value={element.artist} />)}

    let artists = this.props.playlist.map((element, index) => <div key={index}> {element.artist} <Song key={index} /> </div>)
    //this.props.playlist.length > 0 ? artists(this.props.playlist) : "" 

    return (
      <div>
        {artists}
      </div>
    )
  }
}

export default Playlist;
