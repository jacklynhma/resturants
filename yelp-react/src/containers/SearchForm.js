import React, { Component } from 'react';
import TextField from "../components/TextField"

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: "",
      location: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // updates state when field changes
  handleChange(event){
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      term: this.state.term,
      location: this.state.location
    }
    this.props.searchRestaurants(formPayload)
  }

  render() {

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
          value={this.state.term}
          label="Search: "
          name="term"
          handleChange={this.handleChange}
          />

          <TextField
          value={this.state.location}
          label="Location: "
          name="location"
          handleChange={this.handleChange}
          />
          <input className="button" type="submit" vallue="Submit" />
        </form>
      </div>
    )
  }
}


export default SearchForm
