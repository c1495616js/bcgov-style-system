import { buttonCommon } from './base.theme';

export const buttonTheme = (baseTheme) => ({
  buttons: {
    primary: {
      ...buttonCommon,
      backgroundColor: baseTheme.colors.primary,
      border: 'none',
      color: baseTheme.colors.white,
      padding: '12px 32px',
      '&:hover': {
        textDecoration: 'underline',
        opacity: '0.80',
      },
    },
    secondary: {
      ...buttonCommon,
      background: 'none',
      border: `2px solid ${baseTheme.colors.primary}`,
      padding: '10px 30px',
      color: baseTheme.colors.primary,
      '&:hover': {
        opacity: '0.80',
        textDecoration: 'underline',
        backgroundColor: '#003366',
        color: '#FFFFFF',
      },
    },
    'primary-disabled': {
      ...buttonCommon,
      backgroundColor: baseTheme.colors.primary,
      opacity: '0.3',
      border: 'none',
      color: baseTheme.colors.white,
      padding: '12px 32px',
      cursor: 'not-allowed',
    },
    'secondary-disabled': {
      ...buttonCommon,
      backgroundColor: baseTheme.colors.white,
      opacity: '0.3',
      border: `2px solid ${baseTheme.colors.primary}`,
      color: baseTheme.colors.primary,
      padding: '10px 30px',
      fontFamily: `'Noto Sans', Verdana, Arial, sans-serif`,
      cursor: 'not-allowed',
    },
  },
});
