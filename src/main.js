//this will most likely be the parent of our stateful component
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Playlist from './playlist.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      playing: false
    }
  }

componentDidMount() {
    axios.get('http://localhost:8888/recent')
      .then(res => {
        //res.data is the array of object we want
        this.setState({ playlist: res.data });
        //console.log('i am from axios get requeset: ', this.state.playlist)
      });
}

render() {
  //console.log("i am from main.js render area: ", this.state.playlist[0])
    return (
      <div>
        <h1 id="header">Recently played playlist</h1>
        <Playlist playlist={this.state.playlist} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);