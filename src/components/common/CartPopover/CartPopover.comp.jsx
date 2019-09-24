import React from 'react';

import { CartPopoverContainer } from './CartPopover.styles';

import { Menu } from '@material-ui/core';

const CartPopover = ({ anchorEl, isOpen, popoverId, handleMenuClose }) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    marginThreshold={45}
    id={popoverId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isOpen}
    onClose={handleMenuClose}
  >
    <CartPopoverContainer onClick={handleMenuClose}>
      Cart Popover
    </CartPopoverContainer>
  </Menu>
);

export default CartPopover;
