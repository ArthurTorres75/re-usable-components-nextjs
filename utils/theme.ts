import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#669bbc',
    },
    secondary: {
      main: '#29335c',
    },
    mode: 'light',
  },
  typography: {
    fontFamily: "'Roboto','sans-serif'",
  },
});

export default theme;