import React from 'react';

import { SignInContainer, InputField } from './SignIn.styles';

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
  <SignInContainer>
    Sign In
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
      <InputField
        onChange={handleInputChange}
        label="Password"
        type="password"
        name="password"
        autoComplete="password"
        margin="normal"
        variant="outlined"
      />
      <div>Forgot Password?</div>
      <div>You don't have an account? Click here to Sign-up.</div>
      <Button margin="1em 0 0 0">Sign In</Button>
    </form>
  </SignInContainer>
);

export default SignIn;
