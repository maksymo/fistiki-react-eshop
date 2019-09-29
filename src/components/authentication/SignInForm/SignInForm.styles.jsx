import styled from 'styled-components';

export const SignInContainer = styled.div``;

export const ForgotPasswordText = styled.div`
  cursor: pointer;
  margin: 1em 0;
  color: ${props => props.color};
  &:hover {
    text-decoration: underline;
  }
`;
