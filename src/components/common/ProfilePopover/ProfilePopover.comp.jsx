import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOutStart } from '../../../redux/authentication/authentication.actions';

import {
  ProfilePopoverContainer,
  CustomListItemIcon,
  SignInButtonContainer
} from './ProfilePopover.styles';

import { Menu, List, ListItem, ListItemText, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faShoppingBag,
  faDoorOpen
} from '@fortawesome/free-solid-svg-icons';

const ProfilePopover = ({
  anchorEl,
  isOpen,
  popoverId,
  handleMenuClose,
  currentUser,
  signOutStart
}) => {
  const menuOptions = [
    { label: 'Profile', icon: faUser, action: () => {} },
    { label: 'Order', icon: faShoppingBag, action: () => {} },
    { label: 'Sign out', icon: faDoorOpen, action: signOutStart }
  ];

  return (
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
            {menuOptions.map(item => (
              <ListItem button onClick={item.action} key={item.label}>
                <CustomListItemIcon>
                  <FontAwesomeIcon icon={item.icon} />
                </CustomListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
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
};

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ProfilePopover);
