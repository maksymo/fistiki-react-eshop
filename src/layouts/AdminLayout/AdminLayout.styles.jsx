import styled from 'styled-components';
import colorVars from '../../utils/cssColorVars.js';

export const AdminLayoutContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${colorVars.text.main};
`;

export const AdminLayoutBody = styled.div`
  flex: 1;
`;
