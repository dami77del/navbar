import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import NavBar from './components/NavBar/Navbar';
import CartWidget from './components/CartWidget/cartWidget';
import Products  from './components/Product/products';
import theme from './utils/theme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <CartWidget/>
      <Products/> 
    </ThemeProvider>
  )
}

export default App

