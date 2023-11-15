import React from 'react'
import './InputField.css'

function InputField({ type, label, placeholder, value, onChange }) {
    return (
      <div className="input-field">
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  
  export default InputField;

  
