import React from 'react';

import { HomeContainer } from './home.styles';

import TopBanner from '../../components/home/top-banner/top-banner.comp';
import Benefits from '../../components/home/benefits/benefits.comp';
import About from '../../components/home/about/about.comp';

const HomePage = () => (
  <HomeContainer>
    <TopBanner />
    <Benefits />
    <About />
  </HomeContainer>
);

export default HomePage;
