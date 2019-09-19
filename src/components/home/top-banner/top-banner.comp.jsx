import React from 'react';

import Container from '@material-ui/core/Container';

import {
  TopBannerContainer,
  BannerLeft,
  BannerRight,
  BannerImg
} from './Top-banner.styles';

const TopBanner = () => (
  <Container maxWidth="xl">
    <TopBannerContainer>
      <BannerLeft className="banner1">
        <BannerImg src="https://via.placeholder.com/500.png" alt="image 1" />
      </BannerLeft>
      <BannerRight className="banner2">
        <BannerImg src="https://via.placeholder.com/500.png" alt="image 2" />
      </BannerRight>
      <BannerRight className="banner3">
        <BannerImg src="https://via.placeholder.com/500.png" alt="image 3" />
      </BannerRight>
    </TopBannerContainer>
  </Container>
);

export default TopBanner;
