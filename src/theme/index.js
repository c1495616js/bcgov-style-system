import { baseTheme } from './base.theme';
import { buttonTheme } from './button.theme';
import { alertTheme } from './alert.theme';
export const theme = {
  name: 'DEFAULT',
  ...baseTheme,
  ...buttonTheme(baseTheme),
  ...alertTheme(baseTheme),
};
