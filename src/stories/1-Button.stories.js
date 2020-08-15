import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/button/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button variant="primary" onClick={action('clicked')}>
    Primary
  </Button>
);

export const Secondary = () => (
  <Button variant="secondary" onClick={action('clicked')}>
    Secondary
  </Button>
);
