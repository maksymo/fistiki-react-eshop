import AuthenticationActionTypes from './authentication.types';

export const setActiveComponent = component => ({
  type: AuthenticationActionTypes.SET_ACTIVE_COMPONENT,
  payload: component
});
