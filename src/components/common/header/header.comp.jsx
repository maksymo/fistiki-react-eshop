import React from 'react';

import {
  HeaderContainer,
  LogoContainer,
  MenuItemsContainer,
  MenuItem
} from './header.styles';

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <strong>My</strong> Logo
    </LogoContainer>
    <MenuItemsContainer>
      <MenuItem to="/">Home</MenuItem>
      {currentUser ? (
        <MenuItem as="div" onClick={() => console.log('sign-out')}>
          Sign Out
        </MenuItem>
      ) : (
        <MenuItem to="/sign-in">Sing In</MenuItem>
      )}
    </MenuItemsContainer>
  </HeaderContainer>
);

export default Header;
