import { createTheme } from '@mui/material/styles';

// primary and secondary colors
const primaryColor = '#1976d2';
const secondaryColor = '#f50057';

// theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: '#f5f5f5', 
      dark: '#212121',  
    },
    
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  
  },

});

export default theme;
