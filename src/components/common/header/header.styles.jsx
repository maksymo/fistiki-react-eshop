import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  text-transform: uppercase;
`;

export const MenuItemsContainer = styled.div`
  display: flex;
`;

export const MenuItem = styled(Link)`
  cursor: pointer;
  padding: 0.5em 1em;
  text-transform: uppercase;
  transition: color ease-in-out 0.2s;
  &:hover {
    color: grey;
  }
`;
