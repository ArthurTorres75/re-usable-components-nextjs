import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00DDAE',
    },
    secondary: {
      main: '#C5FCEE',
    },
    mode: 'light',
  },
  typography: {
    fontFamily: "'Roboto','sans-serif'",
  },
});

export default theme;