import React from 'react'

import './form-input.component.styles.scss'

const FormInput = ({ handleChange, isTextArea, label, ...otherProps }) => {
  return (
    <div className="row">
      <label>{label}</label>
      {
        isTextArea ?
          <textarea id="note" cols="30" rows="1" onChange={handleChange}></textarea>
          :
          <input onChange={handleChange} {...otherProps}></input>

      }
    </div>

  )
}

export default FormInput;