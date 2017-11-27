import React from 'react';
import '../resturantTile.css';

const ResturantTile = (props) => {
  return(
    <div className="container">
      <div className="tiles">
          <h1> {props.name} </h1>
          <img src={props.image} alt="resturant image" />
          <br />
          <a href={props.url}> {props.name}</a>
          <br />
          {props.location1}, {props.city}, {props.zip_code}
      </div>
    </div>
  )
}

export default ResturantTile
