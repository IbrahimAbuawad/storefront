import React from 'react';
import { Typography, Toolbar, IconButton,AppBar,Box,Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';

import  './header.css';
export default function Header() {
  const state = useSelector(state => state)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Store App 
          </Typography>
          <nav id='cart'>
          <Button color="inherit"><ShoppingCartIcon />&nbsp; CART ({state.cart.cartNumbers})  </Button>

          </nav>
  
        </Toolbar>
      </AppBar>
    </Box>
  );
}
