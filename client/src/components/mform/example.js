import React, { useState } from 'react';
import MForm from './MForm';
import InputField from './inputfield';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <MForm title="Contact Us" onSubmit={handleSubmit}>
        <InputField 
          name="name"
          label="Your Name" 
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <InputField 
          name="email"
          type="email"
          label="Your Email" 
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </MForm>
    </div>
  );
};

export default App;
