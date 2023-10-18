import React, { useState } from 'react';
import EmailInput from './EmailInput';

const App = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <EmailInput 
        label="Your Email" 
        placeholder="example@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default App;
