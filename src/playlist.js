import React, { Component } from 'react';
import Song from './song.js';
import axios from 'axios';

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      playing: false
    }
  }

  add() {
    axios.get(this.props.playlistUrl)
      .then(res => {
       console.log(res)
        this.setState({ playlist: playlist });
      });
  }

  render() {
    return (
      <div>
        <div>
          <h1 id="header">Recently played playlist</h1>
        </div>
        <div className="playlist">
          <div className="song">
            <Song song={this.state.playlist/*should be this.state.song.data*/} />
          </div>
        </div>
      </div>
    )
  }
}

export default Playlist;
