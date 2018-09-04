import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      badMovies: ['Battlerield Earth', 'Catwoman', 'The Last Airbender']
    }
  }

  render() {

    const badMovies = this.state.badMovies.map( movies => {
      return <Movie movies={movies}/>
    })

    return (
      <div className="App">
        <h1>Terrible Movies List:</h1>
            <ol>{badMovies}</ol>
      </div>
    );
  }
}

export default App;
