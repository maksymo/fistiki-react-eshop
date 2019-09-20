import React from 'react';

import { PasswordResetContainer, InputField } from './PasswordResetForm.styles';

import Button from '../../common/Button/Button.comp';

const handleSubmit = event => {
  event.preventDefault();
  console.log('submitted');
};

const handleInputChange = event => {
  const { value, name } = event.target;
  console.log(`name: ${name}, value: ${value}`);
};

const SignIn = () => (
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
      <Button
        margin="1em 0.5em 0 0"
        variant="contained"
        size="large"
        color="primary"
      >
        Request New Password
      </Button>
      <Button margin="1em 0 0 0.5em" size="large" color="primary">
        Cancel
      </Button>
    </form>
  </PasswordResetContainer>
);

export default SignIn;
