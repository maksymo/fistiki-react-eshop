import React from 'react';

import { ProfilePopoverContainer } from './ProfilePopover.styles';

import { Menu } from '@material-ui/core';

const ProfilePopover = ({ anchorEl, isOpen, popoverId, handleMenuClose }) => (
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
    <ProfilePopoverContainer onClick={handleMenuClose}>
      Profile Popover
    </ProfilePopoverContainer>
  </Menu>
);

export default ProfilePopover;
