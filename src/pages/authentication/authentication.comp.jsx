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

import pistachiosImage from '../../assets/images/signIn/greek-pistachios.jpg';

const pageHeaderOptions = {
  signIn: 'Sign In',
  signUp: 'Create New Account',
  forgotPassword: 'Retrieve Password'
};

const formTitleOptions = {
  signIn: 'or sign in with your email',
  signUp: 'or sign in with your email',
  forgotPassword: 'type your email address to get a verification email'
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
          {activeComponent === 'signIn' || activeComponent === 'signUp' ? (
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
          {activeComponent === 'signIn' ? <SignInForm /> : null}
          {activeComponent === 'signUp' ? <SignUpForm /> : null}
          {activeComponent === 'forgotPassword' ? <PasswordResetForm /> : null}
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
