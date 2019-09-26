import styled from 'styled-components';
import Container from '@material-ui/core/Container';

import pistachiosImage from '../../assets/images/products/greek-pistachios.jpg'

export const ShopPageContainer = styled(Container)``;;

export const TopBannerContainer = styled.div`
  height: 15em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${pistachiosImage});
  background-size: cover;
`;

export const CategoryContainer = styled.div`
  margin: 5em 0;
`;

export const CategoryTitle = styled.h1``;
