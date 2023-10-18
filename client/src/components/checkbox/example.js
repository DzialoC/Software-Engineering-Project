import React, { useState } from 'react';
import Checkbox from './Checkbox';

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
        <span style={{ marginLeft: 8 }}>Checkbox Label</span>
      </label>
    </div>
  );
};

export default App;
