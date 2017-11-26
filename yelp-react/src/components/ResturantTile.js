import React from 'react'

const ResturantTile = (props) => {
  return(
    <div>
    <p> {props.name} </p>
    <img src={props.image} alt="resturant image" />
    </div>
  )
}

export default ResturantTile
