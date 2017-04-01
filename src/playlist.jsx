import React from 'react';
import ReactDOM from 'react-dom';
import Song from './song.jsx';

class Playlist extends React.Component {
  constructor() {
    super();
    this.state = {
      playlist: [],
      playing: false
    }
  }

  add() {
    axios.post(this.props.playlistUrl)
      .then(res => {
        let playlist = res.data.children.map(playlist => playlist.data);
        this.setStaet({ playlist });
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
