import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Provider } from 'react-redux'
import { store } from './Store';


const theme = createTheme({
  palette: {
    primary: {
      main: '#12644c',
    },
    secondary: {
      main: '#3e7469',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
      </BrowserRouter>

      
    </Provider>

 


  </React.StrictMode>
);
