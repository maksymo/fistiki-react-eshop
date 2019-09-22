import React from 'react';

import { LogoContainer, MenuItemsContainer, MenuItem } from './Header.styles';
import { FlexGrow } from '../../../App.styles';

import { AppBar, Toolbar } from '@material-ui/core';

const Header = ({ currentUser }) => {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar>
        <LogoContainer to="/">
          <strong>My</strong> Logo
        </LogoContainer>
        <FlexGrow />
        <MenuItemsContainer>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/shop">Products</MenuItem>
          {currentUser ? (
            <MenuItem as="div" onClick={() => console.log('sign-out')}>
              Sign Out
            </MenuItem>
          ) : (
            <MenuItem to="/sign-in">Sing In</MenuItem>
          )}
        </MenuItemsContainer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
