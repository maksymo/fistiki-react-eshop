import React from 'react';

import {
  AuthenticationContainer,
  AuthenticationImgContainer,
  AuthenticationImg,
  AuthenticationFormContainer
} from './Authentication.styles';

import SignIn from '../../components/authentication/SignIn/SignIn.comp';

const AuthenticationPage = () => (
  <AuthenticationContainer>
    <AuthenticationImgContainer>
      <AuthenticationImg
        src="https://via.placeholder.com/500x500/ccc"
        alt="greek pistachios"
      />
    </AuthenticationImgContainer>
    <AuthenticationFormContainer>
      <SignIn />
    </AuthenticationFormContainer>
  </AuthenticationContainer>
);

export default AuthenticationPage;
