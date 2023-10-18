import React, { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      
      <Modal 
        title="My Modal" 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)}
      >
        <p>This is the modal content!</p>
      </Modal>
    </div>
  );
};

export default App;
