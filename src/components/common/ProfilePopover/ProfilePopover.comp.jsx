import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectIsAdmin } from '../../../redux/authentication/authentication.selectors';
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
  faUserShield,
  faDoorOpen
} from '@fortawesome/free-solid-svg-icons';

const ProfilePopover = ({
  anchorEl,
  isOpen,
  popoverId,
  handleMenuClose,
  currentUser,
  isAdmin,
  signOutStart,
  history
}) => {
  const menuOptions = [
    { label: 'Profile', icon: faUser, action: () => {} },
    { label: 'Orders', icon: faShoppingBag, action: () => {} },
    { label: 'Sign out', icon: faDoorOpen, action: signOutStart }
  ];

  if (isAdmin) {
    const adminMenuOption = {
      label: 'Admin',
      icon: faUserShield,
      action: () => history.push('/admin/dashboard')
    };
    menuOptions.splice(2, 0, adminMenuOption);
  }

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

const mapStateToProps = createStructuredSelector({
  isAdmin: selectIsAdmin
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfilePopover)
);
