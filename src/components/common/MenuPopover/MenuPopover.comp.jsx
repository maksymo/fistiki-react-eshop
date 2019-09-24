import React from 'react';

import { MenuPopoverContainer } from './MenuPopover.styles';

import { Menu } from '@material-ui/core';

const MenuPopover = ({ anchorEl, isOpen, popoverId, handleMenuClose }) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={popoverId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isOpen}
    onClose={handleMenuClose}
  >
    <MenuPopoverContainer onClick={handleMenuClose}>
      Menu Popover
    </MenuPopoverContainer>
  </Menu>
);

export default MenuPopover;
