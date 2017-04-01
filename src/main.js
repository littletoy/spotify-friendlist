//this will most likely be the parent of our stateful component
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Playlist from './playlist.js';


class App extends Component {


render() {

const url = 'http://localhost:8888/recent';

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