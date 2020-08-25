import React from 'react';
import styled from 'styled-components';

import { action } from '@storybook/addon-actions';
import Alert from '../components/alert/Alert';

export default {
  title: 'Alert',
  component: Alert,
};

export const Success = () => (
  <Alert variant="success" content="Success Message" />
);

export const Error = () => <Alert variant="error" content="Error Message" />;

export const Warning = () => (
  <Alert variant="warning" content="Warning Message" />
);

export const Info = () => <Alert variant="info" content="Info Message" />;
