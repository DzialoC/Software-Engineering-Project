import React from 'react';
import './RadioButton.css'

function RadioButton({ label, name, value, checked, onChange }) {
  return (
    <div className="radio-button">
      <label>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
