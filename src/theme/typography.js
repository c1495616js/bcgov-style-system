import Typography from 'typography';
import '@bcgov/bc-sans/css/BCSans.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.25,
  headerFontFamily: ['BCSans', 'Noto Sans', 'Verdana', 'Arial', 'sans-serif'],
  bodyFontFamily: [
    'Font Awesome 5 Free',
    'BCSans',
    'Noto Sans',
    'Verdana',
    'Arial',
    'sans-serif',
  ],
  scaleRatio: 2.074,
});

export default typography;
