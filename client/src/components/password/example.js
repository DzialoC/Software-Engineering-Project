import React, { useState } from 'react';
import PasswordInput from './PasswordInput';

const App = () => {
  const [password, setPassword] = useState('');

  return (
    <div>
      <label>
        Password:
        <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
    </div>
  );
};

export default App;
