//this will most likely be the parent of our stateful component
import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './playlist.js';

const url = 'http://localhost:8888/recent';

class App extends Component {

  render() {
    return (
      <div>
        <Playlist playlistUrl = {url}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);