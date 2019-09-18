import React from 'react';

import { SignInContainer } from './SignIn.styles';

import Button from '../../common/Button/Button.comp';
import FormInput from '../../common/FormInput/FormInput.comp';

const handleSubmit = event => {
  event.preventDefault();
  console.log('submited');
};

const handleInputChange = event => {
  const { value, name } = event.target;
  console.log(`name: ${name}, value: ${value}`);
};

const SignIn = () => (
  <SignInContainer>
    Sign In
    <form onSubmit={handleSubmit}>
      <FormInput
        name="name"
        label="Name"
        type="text"
        handleInputChange={handleInputChange}
      />
      <Button margin="1em 0 0 0">Sign In</Button>
    </form>
  </SignInContainer>
);

export default SignIn;
