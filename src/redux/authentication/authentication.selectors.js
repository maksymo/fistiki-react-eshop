import { createSelector } from 'reselect';

const selectAuthentication = state => state.authentication;

export const selectActiveComponent = createSelector(
  [selectAuthentication],
  authentication => authentication.activeComponent
);

export const selectCurrentUser = createSelector(
  [selectAuthentication],
  authentication => authentication.currentUser
);

export const selectSnackbarStatus = createSelector(
  [selectAuthentication],
  authentication => authentication.snackbarStatus
);

export const selectSnackbarMsg = createSelector(
  [selectAuthentication],
  authentication => authentication.snackbarMsg
);

export const selectSnackbarVariant = createSelector(
  [selectAuthentication],
  authentication => authentication.snackbarVariant
);
