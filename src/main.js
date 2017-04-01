//this will most likely be the parent of our stateful component
import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './playlist.jsx';

const url = 'localhost:8888/recent';

class App extends Component {

  render() {
    return (
      <div>
        <Playlist feedUrl = {url}/>
      </div>
    );
  }
}