import styled from 'styled-components';
import colorVars from './utils/cssColorVars.js';

export const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${colorVars.textColorDefault1};
`;

export const AppBody = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: ${props => (props.fontSize ? props.fontSize : '3em')};
  margin-top: 0;
  margin: ${props => (props.margin ? props.margin : '0 0 0.2em 0')};
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  color: ${props =>
    props.light ? colorVars.textColorLight1 : colorVars.textColorDefault1};
`;

export const Subtitle = styled.h3`
  font-size: ${props => (props.fontSize ? props.fontSize : '1.5em')};
  font-family: 'PT Serif', serif;
  font-style: italic;
  font-weight: 400;
  margin: ${props => (props.margin ? props.margin : '0 0 2em 0')};
  color: ${props =>
    props.light ? colorVars.textColorLight2 : colorVars.textColorDefault2};
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
`;
