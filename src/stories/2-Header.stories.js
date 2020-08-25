import React from 'react';
import styled from 'styled-components';

import { action } from '@storybook/addon-actions';
import Header from '../components/header/Header';

export default {
  title: 'Header',
  component: Header,
};

const Div = styled.div`
  position: relative;
`;

export const Basic = () => (
  <Div>
    <Header title="British Columbia" />
  </Div>
);

export const Beta = () => (
  <Div>
    <Header title="British Columbia" isBeta />
  </Div>
);
