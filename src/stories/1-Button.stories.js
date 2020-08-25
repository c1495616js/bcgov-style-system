import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/button/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button variant="primary" onClick={action('clicked')}>
    Submit
  </Button>
);

export const Secondary = () => (
  <Button variant="secondary" onClick={action('clicked')}>
    Submit
  </Button>
);

export const PrimaryDisabled = () => (
  <Button variant="primary-disabled">Submit</Button>
);

export const SecondaryDisabled = () => (
  <Button variant="secondary-disabled">Submit</Button>
);
