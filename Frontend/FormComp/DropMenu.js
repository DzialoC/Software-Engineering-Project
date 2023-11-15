import React from 'react';
import './DropMenu.css'

function Select({ label, options, value, onChange }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
