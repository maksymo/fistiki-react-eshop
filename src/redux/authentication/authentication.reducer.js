import AuthenticationActionTypes from './authentication.types';

const INITIAL_STATE = {
  activeComponent: 'signIn'
};

const authenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthenticationActionTypes.SET_ACTIVE_COMPONENT:
      return {
        ...state,
        activeComponent: action.payload
      };
    default:
      return state;
  }
};

export default authenticationReducer;
