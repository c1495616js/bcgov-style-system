import React from 'react';
import { action } from '@storybook/addon-actions';
import Nav from '../components/navigation/Nav';

export default {
  title: 'Navigation',
  component: Nav,
};

export const Primary = () => <Nav />;
