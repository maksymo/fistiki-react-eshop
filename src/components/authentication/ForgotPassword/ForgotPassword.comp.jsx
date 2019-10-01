import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Field, reduxForm } from 'redux-form';

import { selectLoadingStatus } from '../../../redux/authentication/authentication.selectors';
import {
  setActiveComponent,
  forgotPasswordStart
} from '../../../redux/authentication/authentication.actions';

import { ForgotPasswordContainer } from './ForgotPassword.styles';
import { ActionButtonsContainer } from '../../../App.styles';

import { Button } from '@material-ui/core';
import CustomTextField from '../../common/CustomTextField/CustomTextField.comp';
import { isRequired, isEmail } from '../../../utils/validation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const ForgotPassword = ({
  setActiveComponent,
  forgotPasswordStart,
  isLoading,
  valid
}) => {
  const [email, setEmail] = useState('');

  const emailRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    emailRef.current.ref.current.handleBlur();
    if (valid) {
      forgotPasswordStart(email);
    }
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setEmail(value);
  };
  return (
    <ForgotPasswordContainer>
      <form onSubmit={handleSubmit}>
        <Field
          ref={emailRef}
          component={CustomTextField}
          fullWidth
          onChange={handleInputChange}
          label="Email"
          type="email"
          name="email"
          value={email}
          autoComplete="email"
          margin="normal"
          variant="outlined"
          disabled={isLoading}
          validate={[isRequired, isEmail]}
        />
        <ActionButtonsContainer>
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Submit'}
          </Button>
          <Button
            size="large"
            color="primary"
            disabled={isLoading}
            onClick={() => setActiveComponent('SIGN_IN')}
          >
            Cancel
          </Button>
        </ActionButtonsContainer>
      </form>
    </ForgotPasswordContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoadingStatus
});

const mapDispatchToProps = dispatch => ({
  setActiveComponent: component => dispatch(setActiveComponent(component)),
  forgotPasswordStart: username => dispatch(forgotPasswordStart(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'ForgotPasswordForm' })(ForgotPassword));
