import React from 'react';
import clsx from 'clsx';

import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faExclamationTriangle,
  faCheckCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const variantIcon = {
  success: faCheckCircle,
  warning: faExclamationTriangle,
  error: faExclamationCircle,
  info: faExclamationCircle
};

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  iconVariant: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const CustomSnackbar = ({
  className,
  status,
  variant,
  msg,
  duration = 5000,
  handleClose
}) => {
  const classes = useStyles();
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={status}
      autoHideDuration={duration}
      onClose={handleClose}
    >
      <SnackbarContent
        className={clsx(classes[variant], className)}
        onClose={handleClose}
        message={
          <span id="client-snackbar" className={classes.message}>
            <FontAwesomeIcon
              icon={variantIcon[variant]}
              className={classes.iconVariant}
            />
            {msg}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};

export default CustomSnackbar;
