import React, { useState } from 'react';
import { Hover } from './HoverableComponent.styled';

const HoverableComponent = ({ Component, text, explanation }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Component onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {text}
      {isHovered && <Hover>{explanation}</Hover>}
    </Component>
  );
};

export default HoverableComponent;
