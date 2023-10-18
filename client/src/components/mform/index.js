// MForm.js

import React from 'react';
import { FormContainer, FormTitle, FormButton } from './mform.style.js';

const MForm = ({ title, children, onSubmit }) => {
  return (
    <FormContainer onSubmit={onSubmit}>
      {title && <FormTitle>{title}</FormTitle>}
      {children}
      <FormButton type="submit">Submit</FormButton>
    </FormContainer>
  );
};

export default MForm;
