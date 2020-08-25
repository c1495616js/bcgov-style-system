/** General */
export const baseTheme = {
  colors: {
    primary: '#003366',
    'primary-beta': '#FCBA19',
    text: '#313132',
    links: '#1A5A96',
    bgNav: '#38598A',
    bg: '#F2F2F2',
    components: '#606060',
    error: '#D8292F',
    success: '#2E8540',
    white: '#FFF',
    'btn-focus': '#3B99FC',
  },
};

/** Buttons */

export const buttonCommon = {
  borderRadius: '4px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'block',
  fontSize: '18px',
  fontFamily: `'BCSans', 'Noto Sans', Verdana, Arial, sans-serif`,
  fontWeight: '700',
  letterSpacing: '1px',
  cursor: 'pointer',

  '&:focus': {
    outline: `4px solid  ${baseTheme.colors['btn-focus']}`,
    outlineOffset: '1px',
  },
  '&:active': {
    opacity: '1',
  },
};

/** Alerts */
export const alertCommon = {
  border: '1px solid transparent',
  borderRadius: '4px',
  fontWeight: '700',
  marginBottom: '20px',
  padding: '15px',

  '&::before': {
    float: 'left',
    fontFamily: "'Font Awesome 5 Free'",
    fontSize: '1.5em',
    fontStyle: 'normal',
    lineHeight: '1',
    marginRight: '10px',
    position: 'relative',
    top: '2.5px',
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
  },
};
