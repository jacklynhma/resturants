import React from 'react'

const TextField = (props) => {
  return (
    <label htmlFor={props.name}> {props.label}
      <input
        type="text"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      />
    </label>
  )
}

export default TextField;
