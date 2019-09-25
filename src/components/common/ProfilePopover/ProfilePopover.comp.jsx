import React from 'react';
import { Link } from 'react-router-dom';

import {
  ProfilePopoverContainer,
  CustomListItemIcon,
  SignInButtonContainer
} from './ProfilePopover.styles';

import { Menu, List, ListItem, ListItemText, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const ProfilePopover = ({
  anchorEl,
  isOpen,
  popoverId,
  handleMenuClose,
  currentUser
}) => (
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
      {currentUser ? (
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <CustomListItemIcon>
              <FontAwesomeIcon icon={faUser} />
            </CustomListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <CustomListItemIcon>
              <FontAwesomeIcon icon={faShoppingBag} />
            </CustomListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
      ) : (
        <div>
          You are not signed in.
          <SignInButtonContainer>
            <Link to="/sign-in">
              <Button color="primary">Sign In</Button>
            </Link>
          </SignInButtonContainer>
        </div>
      )}
    </ProfilePopoverContainer>
  </Menu>
);

export default ProfilePopover;
