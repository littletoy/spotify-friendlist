//this will most likely be the parent of our stateful component
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Playlist from './playlist.js';
import axios from 'axios';

class App extends Component {

componentDidMount() {
    axios.get('http://localhost:8888/recent')
      .then(res => {
        this.setState({ playlist: res.data });
        //console.log(this.state.playlist)
      });
}

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