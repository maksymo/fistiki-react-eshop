import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const SignInContainer = styled.div``;

export const InputField = styled(TextField)`
  width: 100%;
`;

export const ForgotPasswordText = styled.div`
  cursor: pointer;
  margin: 1em 0;
  color: ${props => props.color};
  &:hover {
    text-decoration: underline;
  }
`;
