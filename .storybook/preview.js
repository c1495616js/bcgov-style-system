import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { theme } from '../src/theme';
const themes = [{ name: 'DEFAULT', ...theme }];
addDecorator(withThemesProvider(themes));
