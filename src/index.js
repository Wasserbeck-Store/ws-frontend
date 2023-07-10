import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: "#CCC"
    },
    secondary: {
      main: orange[500]
    }
  },
  typography: {
    myVariant: {
      fontSize: "6rem"
    }
  }

})

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>
);
