import React from 'react';
import './TextArea.css'

function TextArea({ label, placeholder, value, onChange }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default TextArea;
