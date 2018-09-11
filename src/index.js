import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500], light: blue[200] }, // Purple and green play nicely together.
    secondary: { main: orange[500], light: orange[200] }, // This is just green.A700 as hex.
    error: red
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
  , document.getElementById('root'));
