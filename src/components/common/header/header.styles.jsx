import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';

// export const useStyles = makeStyles(theme => ({
//   menuButton: {
//     display: 'block',
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       display: 'none'
//     }
//   }
// }));

export const MenuButtonContainer = styled.div`
  display: block;
  margin-right: 1em;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogoContainer = styled(Link)`
  text-transform: uppercase;
`;

export const MenuItemsContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MenuItem = styled(Link)`
  cursor: pointer;
  padding: 0.5em;
  text-transform: uppercase;
  transition: color ease-in-out 0.2s;
  &:hover {
    color: grey;
  }
`;
