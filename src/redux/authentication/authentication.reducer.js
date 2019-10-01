import AuthenticationActionTypes from './authentication.types';

const INITIAL_STATE = {
  currentUser: null,
  currentUserLoading: false,
  activeComponent: 'SIGN_IN',
  loading: false,
  snackbarStatus: false,
  snackbarMsg: null,
  snackbarVariant: 'info'
};

const authenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthenticationActionTypes.SET_ACTIVE_COMPONENT:
      return {
        ...state,
        activeComponent: action.payload
      };
    case AuthenticationActionTypes.SET_SNACKBAR_HIDDEN:
      return {
        ...state,
        snackbarStatus: false
      };
    case AuthenticationActionTypes.GET_AUTHENTICATED_USER_START:
    case AuthenticationActionTypes.SIGN_OUT_START:
      return {
        ...state,
        currentUserLoading: true
      };
    case AuthenticationActionTypes.SIGN_UP_START:
    case AuthenticationActionTypes.VERIFY_EMAIL_START:
    case AuthenticationActionTypes.RESEND_VERIFICATION_EMAIL_START:
    case AuthenticationActionTypes.EMAIL_SIGN_IN_START:
    case AuthenticationActionTypes.FORGOT_PASSWORD_START:
    case AuthenticationActionTypes.FORGOT_PASSWORD_SUBMIT_START:
      return {
        ...state,
        loading: true,
        snackbarMsg: null
      };
    case AuthenticationActionTypes.GET_AUTHENTICATED_USER_SUCCESS:
      return {
        ...state,
        currentUserLoading: false,
        currentUser: action.payload
      };
    case AuthenticationActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUserLoading: false,
        currentUser: null
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
        activeComponent: 'SIGN_IN',
        snackbarStatus: true,
        snackbarMsg: 'Your e-mail is verified!',
        snackbarVariant: 'success'
      };
    case AuthenticationActionTypes.RESEND_VERIFICATION_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        snackbarStatus: true,
        snackbarMsg:
          'A new verification code has been sent to your e-mail address',
        snackbarVariant: 'success'
      };
    case AuthenticationActionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: { username: action.payload },
        snackbarStatus: true,
        snackbarMsg: 'A verification code has been sent to your e-mail address',
        snackbarVariant: 'success',
        activeComponent: 'FORGOT_PASSWORD_SUBMIT'
      };
    case AuthenticationActionTypes.FORGOT_PASSWORD_SUBMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        snackbarStatus: true,
        snackbarMsg: 'Password reset successfully!',
        snackbarVariant: 'success',
        activeComponent: 'SIGN_IN'
      };
    case AuthenticationActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        activeComponent: 'SIGN_IN',
        snackbarStatus: true,
        snackbarMsg: 'Your have signed in!',
        snackbarVariant: 'success'
      };
    case AuthenticationActionTypes.GET_AUTHENTICATED_USER_FAILURE:
      return {
        ...state,
        currentUserLoading: false
      };
    case AuthenticationActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        currentUserLoading: false,
        snackbarStatus: true,
        snackbarMsg: action.payload,
        snackbarVariant: 'error'
      };
    case AuthenticationActionTypes.SIGN_UP_FAILURE:
    case AuthenticationActionTypes.VERIFY_EMAIL_FAILURE:
    case AuthenticationActionTypes.RESEND_VERIFICATION_EMAIL_FAILURE:
    case AuthenticationActionTypes.SIGN_IN_FAILURE:
    case AuthenticationActionTypes.FORGOT_PASSWORD_FAILURE:
    case AuthenticationActionTypes.FORGOT_PASSWORD_SUBMIT_FAILURE:
      let errorMsg = action.payload;
      if (errorMsg.includes('username'))
        errorMsg = errorMsg.replace('username', 'e-mail');
      if (errorMsg.includes('Username'))
        errorMsg = errorMsg.replace('Username', 'E-mail');
      return {
        ...state,
        loading: false,
        snackbarStatus: true,
        snackbarMsg: errorMsg,
        snackbarVariant: 'error'
      };
    default:
      return state;
  }
};

export default authenticationReducer;
