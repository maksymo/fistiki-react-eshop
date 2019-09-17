import React from 'react';

import { HomeContainer } from './Home.styles';

import TopBanner from '../../components/home/Top-banner/Top-banner.comp';
import Benefits from '../../components/home/Benefits/Benefits.comp';
import About from '../../components/home/About/About.comp';

const HomePage = () => (
  <HomeContainer>
    <TopBanner />
    <Benefits />
    <About />
  </HomeContainer>
);

export default HomePage;
