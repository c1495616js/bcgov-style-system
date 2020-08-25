import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

const Alert = styled.div`
  ${variant({
    scale: 'alerts',
  })}
`;

const Content = styled.p`
  font-size: 18px;
  margin: 0;
  padding-left: 35px;
`;

export default ({ content, ...props }) => (
  <Alert {...props}>
    <Content>{content}</Content>
  </Alert>
);
