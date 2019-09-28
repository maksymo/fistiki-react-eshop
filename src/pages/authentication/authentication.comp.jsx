import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setActiveComponent } from '../../redux/authentication/authentication.actions';
import { selectActiveComponent } from '../../redux/authentication/authentication.selectors';

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
import VerifySignUp from '../../components/authentication/VerifySignUp/VerifySignUp.comp';

import pistachiosImage from '../../assets/images/signIn/greek-pistachios.jpg';

const pageHeaderOptions = {
  SIGN_IN: 'Sign In',
  SIGN_UP: 'Create New Account',
  FORGOT_PASSWORD: 'Retrieve Password',
  VERIFY_EMAIL: 'Verify E-mail Address'
};

const formTitleOptions = {
  SIGN_IN: 'or sign in with your email',
  SIGN_UP: 'or sign in with your email',
  FORGOT_PASSWORD: 'type your email address to get a verification email',
  VERIFY_EMAIL: 'type the code your received in your email address'
};

const AuthenticationPage = ({ activeComponent }) => (
  <Container maxWidth="xl">
    <AuthenticationContainer>
      <AuthenticationImgContainer>
        <AuthenticationImg src={pistachiosImage} alt="greek pistachios" />
      </AuthenticationImgContainer>
      <AuthenticationFormContainer>
        <AuthenticationFormWrapper>
          <Title fontSize="2em">{pageHeaderOptions[activeComponent]}</Title>
          {activeComponent === 'SIGN_IN' || activeComponent === 'SIGN_UP' ? (
            <SocialSignInContainer>
              <IconButton aria-label="google">
                <FontAwesomeIcon size="lg" icon={faGoogle} />
              </IconButton>
              <IconButton aria-label="facebook">
                <FontAwesomeIcon size="lg" icon={faFacebook} />
              </IconButton>
            </SocialSignInContainer>
          ) : null}
          <FormTitle>{formTitleOptions[activeComponent]}</FormTitle>
          {activeComponent === 'SIGN_IN' ? <SignInForm /> : null}
          {activeComponent === 'SIGN_UP' ? <SignUpForm /> : null}
          {activeComponent === 'FORGOT_PASSWORD' ? <PasswordResetForm /> : null}
          {activeComponent === 'VERIFY_EMAIL' ? <VerifySignUp /> : null}
        </AuthenticationFormWrapper>
      </AuthenticationFormContainer>
    </AuthenticationContainer>
  </Container>
);

const mapStateToProps = createStructuredSelector({
  activeComponent: selectActiveComponent
});

const mapActionsToProps = dispatch => ({
  setActiveComponent: component => dispatch(setActiveComponent(component))
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AuthenticationPage);
