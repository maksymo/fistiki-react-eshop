import { takeLatest, put, all, call } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';

import AuthenticationActionTypes from './authentication.types';

import {
  signUpSuccess,
  signUpFailure,
  verifyEmailAddressSuccess,
  verifyEmailAddressFailure,
  resendVerificationEmailSuccess,
  resendVerificationEmailFailure,
  signInSuccess,
  signInFailure
} from './authentication.actions';

export function* signUp({ payload: { email, password } }) {
  try {
    const { user } = yield Auth.signUp({
      username: email,
      password,
      attributes: { email }
    });
    yield put(signUpSuccess(user.username));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* onSignUpStart() {
  yield takeLatest(AuthenticationActionTypes.SIGN_UP_START, signUp);
}

export function* verifyEmail({ payload: { username, code } }) {
  try {
    console.log(`verifyEmail data: ${username}`);
    const data = yield Auth.confirmSignUp(username, code);
    yield put(verifyEmailAddressSuccess(data));
  } catch (error) {
    yield put(verifyEmailAddressFailure(error.message));
  }
}

export function* onVerifyEmailAddressStart() {
  yield takeLatest(AuthenticationActionTypes.VERIFY_EMAIL_START, verifyEmail);
}

export function* resendEmail({ payload }) {
  try {
    yield Auth.resendSignUp(payload);
    yield put(resendVerificationEmailSuccess());
  } catch (error) {
    yield put(resendVerificationEmailFailure(error.message));
  }
}

export function* onResendVerificationEmailStart() {
  yield takeLatest(
    AuthenticationActionTypes.RESEND_VERIFICATION_EMAIL_START,
    resendEmail
  );
}

export function* signInWithEmail({ payload: { username, password } }) {
  try {
    const user = yield Auth.signIn(username, password);
    if (
      user.challengeName === 'SMS_MFA' ||
      user.challengeName === 'SOFTWARE_TOKEN_MFA'
    ) {
      // Create UI to get MFA code and then execute Auth.confirmSignIn()
    } else if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
      // Create UI to get new password and additional data if needed.
    } else if (user.challengeName === 'MFA_SETUP') {
      // This happens when the MFA method is TOTP - Create UI to support setup TOTP
      Auth.setupTOTP(user);
    } else {
      // The user directly signs in
      yield put(signInSuccess(user));
    }
  } catch (error) {
    if (error.code === 'UserNotConfirmedException') {
      // The error happens if the user didn't finish the confirmation step when signing up
      // In this case you need to resend the code and confirm the user
      // About how to resend the code and confirm the user, please check the signUp part
    } else if (error.code === 'PasswordResetRequiredException') {
      // The error happens when the password is reset in the Cognito console
      // In this case you need to call forgotPassword to reset the password
      // Please check the Forgot Password part.
    } else if (error.code === 'NotAuthorizedException') {
      // The error happens when the incorrect password is provided
    } else if (error.code === 'UserNotFoundException') {
      // The error happens when the supplied username/email does not exist in the Cognito user pool
    }
    yield put(signInFailure(error.message));
  }
}

export function* onSignInStart() {
  yield takeLatest(
    AuthenticationActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmail
  );
}

export function* authenticationSagas() {
  yield all([
    call(onSignUpStart),
    call(onVerifyEmailAddressStart),
    call(onResendVerificationEmailStart),
    call(onSignInStart)
  ]);
}
