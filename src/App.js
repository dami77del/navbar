import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import NavBar from './components/NavBar/Navbar';
import cartWidget from './components/CartWidget/CartWidget';
import theme from './utils/theme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <cartWidget/>
    </ThemeProvider>
  )
}

export default App

