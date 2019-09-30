import styled from 'styled-components';

import cssColorVars from '../../../utils/cssColorVars.js';

export const VerifySignUpContainer = styled.div``;

export const ResendVerificationEmailText = styled.div`
  cursor: pointer;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  margin: 1em 0;
  color: ${props => (props.disabled ? cssColorVars.disabled : props.color)};
  &:hover {
    text-decoration: underline;
  }
`;
