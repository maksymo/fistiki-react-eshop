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
