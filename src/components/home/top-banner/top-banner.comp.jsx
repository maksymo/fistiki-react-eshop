import React from 'react';

import Container from '@material-ui/core/Container';

import {
  TopBannerContainer,
  BannerLeft,
  BannerRight,
  BannerImg
} from './Top-banner.styles';

import pistachioImage1 from '../../../assets/images/home/topBanners/aegina-pistachios-1.jpg';
import pistachioImage2 from '../../../assets/images/home/topBanners/aegina-pistachios-2.jpg';
import pistachioImage3 from '../../../assets/images/home/topBanners/aegina-pistachios-3.jpg';

const TopBanner = () => (
  <Container maxWidth="xl">
    <TopBannerContainer>
      <BannerLeft className="banner1">
        <BannerImg src={pistachioImage1} alt="aegina pistachios" />
      </BannerLeft>
      <BannerRight className="banner2">
        <BannerImg src={pistachioImage2} alt="aegina pistachios" />
      </BannerRight>
      <BannerRight className="banner3">
        <BannerImg src={pistachioImage3} alt="aegina pistachios" />
      </BannerRight>
    </TopBannerContainer>
  </Container>
);

export default TopBanner;
