import React from 'react';

import {
  MenuButtonContainer,
  LogoContainer,
  MenuItemsContainer,
  MenuItem
} from './Header.styles';
import { FlexGrow } from '../../../App.styles';

import { AppBar, Toolbar, IconButton, Badge } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUser,
  faShoppingBag
} from '@fortawesome/free-solid-svg-icons';

const Header = ({ currentUser }) => {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar>
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
        <MenuButtonContainer>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
        </MenuButtonContainer>
        <FlexGrow />
        <LogoContainer to="/">
          <strong>Fistiki</strong> Pistachio Nuts
        </LogoContainer>
        <FlexGrow />
        <IconButton aria-label="user" aria-haspopup="true">
          <FontAwesomeIcon icon={faUser} />
        </IconButton>
        <IconButton aria-label="cart" aria-haspopup="true">
          <Badge badgeContent={4} color="error">
            <FontAwesomeIcon icon={faShoppingBag} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
