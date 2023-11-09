import React from 'react';

function PasswordInput({ label, placeholder, value, onChange }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default PasswordInput;
