import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      primary: {
        main: "#000e35",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <BrowserRouter>
            <ThemeProvider theme={theme}>
            <App />
            </ThemeProvider>
        </BrowserRouter>

    </React.StrictMode>
);
