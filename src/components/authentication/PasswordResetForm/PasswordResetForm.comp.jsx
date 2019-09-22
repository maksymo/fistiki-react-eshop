import React from 'react';
import { connect } from 'react-redux';

import { setActiveComponent } from '../../../redux/authentication/authentication.actions';

import { PasswordResetContainer, InputField } from './PasswordResetForm.styles';
import { ActionButtonsContainer } from '../../../App.styles';

import { Button } from '@material-ui/core';

const handleSubmit = event => {
  event.preventDefault();
  console.log('submitted');
};

const handleInputChange = event => {
  const { value, name } = event.target;
  console.log(`name: ${name}, value: ${value}`);
};

const SignIn = ({ setActiveComponent }) => (
  <PasswordResetContainer>
    <form onSubmit={handleSubmit}>
      <InputField
        onChange={handleInputChange}
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <ActionButtonsContainer>
        <Button variant="contained" size="large" color="primary">
          Submit
        </Button>
        <Button
          size="large"
          color="primary"
          onClick={() => setActiveComponent('signIn')}
        >
          Cancel
        </Button>
      </ActionButtonsContainer>
    </form>
  </PasswordResetContainer>
);

const mapActionsToProps = dispatch => ({
  setActiveComponent: component => dispatch(setActiveComponent(component))
});

export default connect(
  null,
  mapActionsToProps
)(SignIn);
