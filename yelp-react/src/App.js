import React, { Component } from 'react';
import logo from './logo.svg';
import SearchForm from './containers/SearchForm'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list_of_resturants: []
    }
    this.searchResturants = this.searchResturants.bind(this);
  }

  searchResturants(formPayload){
    fetch(`/api/v1/resturants?term=${formPayload.term}&location=${formPayload.location}`)
    .then(response => {return response.json()})
    .then(responseBody => {
      debugger
      this.setState({list_of_resturants: responseBody})
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchForm searchResturants={this.searchResturants}/>
      </div>
    );
  }
}

export default App;
