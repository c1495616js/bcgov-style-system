import React from 'react';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { AppProvider } from '../src/components/common/AppProvider';

import { theme } from '../src/theme';
const themes = [theme];
addDecorator(withThemesProvider(themes, AppProvider));
