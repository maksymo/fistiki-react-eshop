import styled, { css } from 'styled-components';
import colorVars from '../../../utils/cssColorVars.js';

const disabledStyles = css`
  cursor: not-allowed;
  opacity: 0.6;
`;

const getDisabledStatus = props => {
  if (props.disabled) {
    return disabledStyles;
  }
};

export const ButtonContainer = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  padding: 0.7rem 1.3rem;
  font-weight: 700;
  margin: ${props => (props.margin ? props.margin : '0')}
  background-color: ${props =>
    props.inverted ? 'transparent' : colorVars.primary};
  border: 0.12rem solid ${colorVars.primary};
  color: ${props => (props.inverted ? colorVars.primary : 'white')};
  transition: all cubic-bezier(0.25, 0.8, 0.5, 1) 0.15s;
  ${getDisabledStatus}
  &:hover {
    background-color: ${props =>
      !props.inverted ? 'transparent' : colorVars.primary};
    border: 0.12rem solid
      ${props => (!props.inverted ? colorVars.primary : 'transparent')};
    color: ${props => (!props.inverted ? colorVars.primary : 'white')};
  }
  &:focus {
    outline: none;
  }
`;
