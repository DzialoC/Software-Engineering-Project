import React from 'react';
import Accordion from './Accordion';

const App = () => {
  return (
    <div>
      <Accordion title="Accordion 1">
        This is the content for Accordion 1.
      </Accordion>
      <Accordion title="Accordion 2">
        This is the content for Accordion 2.
      </Accordion>
    </div>
  );
};

export default App;
