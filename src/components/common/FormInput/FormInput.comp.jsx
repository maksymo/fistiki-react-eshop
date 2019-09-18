import React from 'react';

import { InputContainer, InputLabel, InputField } from './FormInput.styles';

const FormInput = ({ handleInputChange, label, ...otherProps }) => (
  <InputContainer>
    <InputLabel>{label}</InputLabel>
    <InputField onChange={handleInputChange} {...otherProps} />
  </InputContainer>
);

export default FormInput;
