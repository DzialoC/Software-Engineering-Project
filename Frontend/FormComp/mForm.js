import React from 'react';

function mForm({ onSubmit, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}

export default mForm;