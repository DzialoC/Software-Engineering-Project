import React, { useState } from 'react';
import Textarea from './Textarea';

const App = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <Textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
        rows={6}
      />
    </div>
  );
};

export default App;
