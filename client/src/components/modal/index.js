// Modal.js

import React from 'react';
import { Overlay, ModalContainer, ModalHeader, ModalTitle, CloseButton } from './modal.style.js';

const Modal = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <div>
          {children}
        </div>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
