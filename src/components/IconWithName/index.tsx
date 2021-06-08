import React from 'react';

import { Container } from './styles';

interface IconWithNameProps {
  src: string;
  alt: string;
}

const IconWithName: React.FC<IconWithNameProps> = ({ src, alt, children }) => (
  <Container>
    <img src={src} alt={alt} height={60} width={60} />
    <span>{children}</span>
  </Container>
);

export default IconWithName;
