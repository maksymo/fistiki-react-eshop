import React from 'react';

import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import {
  AuthenticationContainer,
  AuthenticationImgContainer,
  AuthenticationImg,
  AuthenticationFormContainer,
  AuthenticationFormWrapper,
  SocialSignInContainer,
  FormTitle
} from './Authentication.styles';
import { Title } from '../../App.styles';

import SignInForm from '../../components/authentication/SignInForm/SignInForm.comp';
import SignUpForm from '../../components/authentication/SignUpForm/SignUpForm.comp';
import PasswordResetForm from '../../components/authentication/PasswordResetForm/PasswordResetForm.comp';

const pageHeaderOptions = {
  signIn: 'Sign In',
  signUp: 'Create New Account',
  forgotPassword: 'Retrieve Password'
};

const formTitleOptions = {
  signIn: 'or sign in with your email',
  signUp: 'or sign up with your email',
  forgotPassword: 'type your email address to get a verification email'
};

const AuthenticationPage = () => (
  <Container maxWidth="xl">
    <AuthenticationContainer>
      <AuthenticationImgContainer>
        <AuthenticationImg
          src="https://via.placeholder.com/500x500/ccc"
          alt="greek pistachios"
        />
      </AuthenticationImgContainer>
      <AuthenticationFormContainer>
        <AuthenticationFormWrapper>
          <Title fontSize="2em">{pageHeaderOptions['signIn']}</Title>
          <SocialSignInContainer>
            <IconButton aria-label="google">
              <FontAwesomeIcon size="lg" icon={faGoogle} />
            </IconButton>
            <IconButton aria-label="facebook">
              <FontAwesomeIcon size="lg" icon={faFacebook} />
            </IconButton>
          </SocialSignInContainer>
          <FormTitle>{formTitleOptions['signIn']}</FormTitle>
          <SignInForm />
          <SignUpForm />
          <PasswordResetForm />
        </AuthenticationFormWrapper>
      </AuthenticationFormContainer>
    </AuthenticationContainer>
  </Container>
);

export default AuthenticationPage;
