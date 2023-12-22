import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from '@mui/material/styles';

import theme from './themeConfig'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Botón
      </Button>

      <Button variant="contained" color="secondary">
        Botón
      </Button>
    </ThemeProvider>
  );
}

export default App;
