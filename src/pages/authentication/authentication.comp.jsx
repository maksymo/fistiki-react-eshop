import React from 'react';

import Container from '@material-ui/core/Container';

import {
  AuthenticationContainer,
  AuthenticationImgContainer,
  AuthenticationImg,
  AuthenticationFormContainer
} from './Authentication.styles';

import SignIn from '../../components/authentication/SignIn/SignIn.comp';

const AuthenticationPage = () => (
  <Container maxWidth="lg">
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
  </Container>
);

export default AuthenticationPage;
