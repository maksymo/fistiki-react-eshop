import React, { useState } from 'react';

import {
  MenuButtonContainer,
  LogoContainer,
  GreetingContainer,
  MenuItemsContainer,
  MenuItem,
  useStyles
} from './Header.styles';

import { AppBar, Toolbar, IconButton, Badge, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUser,
  faShoppingBag
} from '@fortawesome/free-solid-svg-icons';

import CartPopover from '../CartPopover/CartPopover.comp';
import ProfilePopover from '../ProfilePopover/ProfilePopover.comp';
import MenuPopover from '../MenuPopover/MenuPopover.comp';

const Header = ({ currentUser }) => {
  const classes = useStyles();
  const [cartPopoverAnchorEl, setCartPopoverAnchorEl] = useState(null);
  const [profilePopoverAnchorEl, setProfilePopoverAnchorEl] = useState(null);
  const [menuPopoverAnchorEl, setMenuPopoverAnchorEl] = useState(null);
  const isCartPopoverActive = Boolean(cartPopoverAnchorEl);
  const isProfilePopoverActive = Boolean(profilePopoverAnchorEl);
  const isMenuPopoverActive = Boolean(menuPopoverAnchorEl);
  const cartPopoverId = 'cart-popover';
  const profilePopoverId = 'profile-popover';
  const menuPopoverId = 'menu-popover';
  /**
   * Handle popover open.
   *
   * @function handlePopoverOpen
   * @param {Object} event Event object.
   * @param {String} popover Popover type to show.
   */
  const handlePopoverOpen = ({ currentTarget }, popover) => {
    if (popover === cartPopoverId) {
      setCartPopoverAnchorEl(currentTarget);
    } else if (popover === profilePopoverId) {
      setProfilePopoverAnchorEl(currentTarget);
    } else if (popover === menuPopoverId) {
      setMenuPopoverAnchorEl(currentTarget);
    }
  };
  /**
   * Handle popover close.
   *
   * @function handlePopoverClose
   * @param {String} popover Popover type to show.
   */
  const handlePopoverClose = popover => {
    if (popover === cartPopoverId) {
      setCartPopoverAnchorEl(null);
    } else if (popover === profilePopoverId) {
      setProfilePopoverAnchorEl(null);
    } else if (popover === menuPopoverId) {
      setMenuPopoverAnchorEl(null);
    }
  };

  return (
    <div>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item xs={4} className={classes.toolbarMenu}>
              <MenuItemsContainer>
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/shop">Products</MenuItem>
                <MenuItem to="/contact">Contact</MenuItem>
              </MenuItemsContainer>
              <MenuButtonContainer>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  aria-controls={menuPopoverId}
                  onClick={event => handlePopoverOpen(event, menuPopoverId)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </IconButton>
              </MenuButtonContainer>
            </Grid>
            <Grid item xs={4} className={classes.toolbarLogo}>
              <LogoContainer to="/">
                <strong>Fistiki</strong> Pistachio Nuts
              </LogoContainer>
            </Grid>
            <Grid item xs={4} className={classes.toolbarButtons}>
              <GreetingContainer>
                Hello, {currentUser ? currentUser.name : 'Guest'}!
              </GreetingContainer>
              <IconButton
                aria-label="user"
                aria-haspopup="true"
                aria-controls={profilePopoverId}
                onClick={event => handlePopoverOpen(event, profilePopoverId)}
              >
                <FontAwesomeIcon icon={faUser} />
              </IconButton>
              <IconButton
                aria-label="cart"
                aria-haspopup="true"
                aria-controls={cartPopoverId}
                onClick={event => handlePopoverOpen(event, cartPopoverId)}
              >
                <Badge badgeContent={4} color="error">
                  <FontAwesomeIcon icon={faShoppingBag} />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <CartPopover
        anchorEl={cartPopoverAnchorEl}
        isOpen={isCartPopoverActive}
        popoverId={cartPopoverId}
        handleMenuClose={() => handlePopoverClose(cartPopoverId)}
      />
      <ProfilePopover
        anchorEl={profilePopoverAnchorEl}
        isOpen={isProfilePopoverActive}
        popoverId={profilePopoverId}
        currentUser={currentUser}
        handleMenuClose={() => handlePopoverClose(profilePopoverId)}
      />
      <MenuPopover
        anchorEl={menuPopoverAnchorEl}
        isOpen={isMenuPopoverActive}
        popoverId={menuPopoverId}
        handleMenuClose={() => handlePopoverClose(menuPopoverId)}
      />
    </div>
  );
};

export default Header;
