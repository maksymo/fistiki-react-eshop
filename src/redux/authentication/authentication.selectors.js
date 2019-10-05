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

export const selectIsAdmin = createSelector(
  [selectAuthentication],
  authentication => authentication.isAdmin
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

export const selectLoadingStatus = createSelector(
  [selectAuthentication],
  authentication => authentication.loading
);

export const selectCurrentUserLoadingStatus = createSelector(
  [selectAuthentication],
  authentication => authentication.currentUserLoading
);
