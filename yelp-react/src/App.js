import React, { Component } from 'react';
import logo from './logo.svg';
import SearchForm from './containers/SearchForm'
import ResturantTile from './components/ResturantTile'
import SpinnerWheel from './containers/SpinnerWheel'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list_of_resturants: []
    }
    this.searchRestaurants = this.searchRestaurants.bind(this);
  }

  searchRestaurants(formPayload){
    fetch(`/api/v1/restaurants?term=${formPayload.term}&location=${formPayload.location}`)
    .then(response => {return response.json()})
    .then(responseBody => {
      this.setState({list_of_resturants: responseBody.q.businesses})
    })
  }

  render() {

    let result = this.state.list_of_resturants.map((resturant)=> {

      return (
        <ResturantTile
          name={resturant.name}
          image={resturant.image_url}
          location1={resturant.location.address1}
          location2={resturant.location.address2}
          location3={resturant.location.address3}
          city={resturant.location.city}
          zip_code={resturant.zip_code}
          url={[resturant.url]}
        />
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React </h1>
        </header>
        <SearchForm searchRestaurants={this.searchRestaurants}/>
        <SpinnerWheel />
        {result}
      </div>
    );
  }
}

export default App;
