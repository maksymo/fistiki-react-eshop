import styled from 'styled-components';
import colorVars from '../../utils/cssColorVars.js';

export const PublicLayoutContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${colorVars.text.main};
`;

export const PublicLayoutBody = styled.div`
  flex: 1;
`;
