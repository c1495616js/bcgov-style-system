import { alertCommon } from './base.theme';

export const alertTheme = (baseTheme) => ({
  alerts: {
    success: {
      ...alertCommon,
      backgroundColor: '#dff0d8',
      borderColor: '#d6e9c6',
      color: '#2d4821',
      '&:before': {
        content: '"\\f058"',
      },
    },
    error: {
      ...alertCommon,
      backgroundColor: '#f2dede',
      borderColor: '#ebccd1',
      color: '#a12622',
      '&:before': {
        content: '"\\f06a"',
      },
    },
    warning: {
      ...alertCommon,
      backgroundColor: '#f9f1c6',
      borderColor: '#faebcc',
      color: '#6c4a00',
      '&:before': {
        content: '"\\f071"',
      },
    },
    info: {
      ...alertCommon,
      backgroundColor: '#d9eaf7',
      '&:before': {
        content: '"\\f05a"',
      },
    },
  },
});
