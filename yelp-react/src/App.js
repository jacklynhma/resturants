import React, { Component } from 'react';
import logo from './logo.svg';
import SearchForm from './containers/SearchForm'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.searchResturants = this.searchResturants.bind(this);
  }

  searchResturants(formPayload){
    fetch('/api/v1/')
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
        <SearchForm />
      </div>
    );
  }
}

export default App;
