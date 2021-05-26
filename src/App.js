import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import NavBar from './components/NavBar/Navbar';
import CartWidget from './components/CartWidget/cartWidget';
import Card from './components/Cards/card';
import theme from './utils/theme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <CartWidget/>
      <Card/>
    </ThemeProvider>
  )
}

export default App

