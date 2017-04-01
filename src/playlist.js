import React from 'react';
import ReactDOM from 'react-dom';
import Song from './song.js';

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      playing: false
    }
  }

  add() {
    axios.post(this.props.playlistUrl)
      .then(res => {
        let playlist = res.data.children.map(playlist => playlist.data);
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
            <Song song={this.state.song.data} />
          </div>
        </div>
      </div>
    )
  }
}

export default Playlist;
