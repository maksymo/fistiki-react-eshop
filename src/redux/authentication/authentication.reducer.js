import AuthenticationActionTypes from './authentication.types';

const INITIAL_STATE = {
  currentUser: null,
  activeComponent: 'SIGN_IN',
  loading: false,
  errorMsg: null
};

const authenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthenticationActionTypes.SET_ACTIVE_COMPONENT:
      return {
        ...state,
        activeComponent: action.payload
      };
    case AuthenticationActionTypes.SIGN_UP_START:
    case AuthenticationActionTypes.VERIFY_EMAIL_START:
    case AuthenticationActionTypes.RESEND_VERIFICATION_EMAIL_START:
      return {
        ...state,
        loading: true,
        errorMsg: null
      };
    case AuthenticationActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: { username: action.payload },
        activeComponent: 'VERIFY_EMAIL'
      };
    case AuthenticationActionTypes.VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: { username: action.payload },
        activeComponent: 'SIGN_IN'
      };
    case AuthenticationActionTypes.RESEND_VERIFICATION_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case AuthenticationActionTypes.SIGN_UP_FAILURE:
    case AuthenticationActionTypes.VERIFY_EMAIL_FAILURE:
    case AuthenticationActionTypes.RESEND_VERIFICATION_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload
      };
    default:
      return state;
  }
};

export default authenticationReducer;
