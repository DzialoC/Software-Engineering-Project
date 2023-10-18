// Accordion.js

import React, { useState } from 'react';
import { AccordionContainer, AccordionHeader, AccordionBody } from './accordion.style.js';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        {title}
      </AccordionHeader>
      <AccordionBody isOpen={isOpen}>
        {children}
      </AccordionBody>
    </AccordionContainer>
  );
};

export default Accordion;
