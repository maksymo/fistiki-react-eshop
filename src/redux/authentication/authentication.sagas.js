import { takeLatest, put, all, call } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';

import AuthenticationActionTypes from './authentication.types';

import {
  signUpSuccess,
  signUpFailure,
  verifyEmailAddressSuccess,
  verifyEmailAddressFailure,
  resendVerificationEmailSuccess,
  resendVerificationEmailFailure
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

export function* authenticationSagas() {
  yield all([
    call(onSignUpStart),
    call(onVerifyEmailAddressStart),
    call(onResendVerificationEmailStart)
  ]);
}
