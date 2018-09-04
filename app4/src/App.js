import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this)
  }

  // componentDidMount(){
  //   axios.get('https://joes-autos.herokuapp.com/api/vehicles').then(res => {
    
  //   this.setState({
  //     cars: res.data
  //   })
  //   })
  // }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
      console.log(this.state.cars)
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {this.state.cars}
      </div>
    );
  }
}

export default App;
