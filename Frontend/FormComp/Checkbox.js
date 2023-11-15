import React from 'react';
import './Checkbox.css'

function Checkbox({ label, name, value, checked, onChange }) {
  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
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

export default Checkbox;
