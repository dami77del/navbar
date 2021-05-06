import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import NavBar from './components/NavBar/navbar';
import theme from './utils/theme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
    </ThemeProvider>
  )
}

export default App

