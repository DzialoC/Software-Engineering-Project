import React from 'react';

function EmailInput({ label, placeholder, value, onChange }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default EmailInput;