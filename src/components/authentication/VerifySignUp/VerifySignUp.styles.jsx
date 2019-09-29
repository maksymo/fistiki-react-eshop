import styled from 'styled-components';

export const VerifySignUpContainer = styled.div``;

export const ResendVerificationEmailText = styled.div`
  cursor: pointer;
  margin: 1em 0;
  color: ${props => props.color};
  &:hover {
    text-decoration: underline;
  }
`;
