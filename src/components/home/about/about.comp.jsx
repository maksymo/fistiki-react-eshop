import React from 'react';

import Container from '@material-ui/core/Container';

import {
  AboutContainer,
  AboutInfoContainer,
  AboutTextTitle,
  AboutTextBody,
  AboutImgContainer,
  AboutImg
} from './About.styles';
import { Title, Subtitle } from '../../../App.styles';

import pistachioTree1 from '../../../assets/images/home/about/pistachio-tree1.jpg';
import pistachioTree2 from '../../../assets/images/home/about/pistachio-tree2.jpg';
import pistachioTree3 from '../../../assets/images/home/about/pistachio-tree3.jpg';
import pistachios from '../../../assets/images/home/about/pistachios.jpg';

const Benefits = () => (
  <Container maxWidth="xl">
    <AboutContainer>
      <Title>Fistiki</Title>
      <Subtitle>Φιστίκι (Fistíki) is the greek word for pistachio.</Subtitle>
      <AboutInfoContainer>
        <AboutTextTitle>the most famous pistachios</AboutTextTitle>
        <AboutTextBody>
          Aegina island have a very limited production of pistachios and the
          annual output varies each year. The rich in nutrients pistachio nuts
          and the limited production makes our pistachios a premium product.
        </AboutTextBody>
        <AboutImgContainer>
          <AboutImg src={pistachioTree1} alt="greek pistachio tree" />
        </AboutImgContainer>
        <AboutImgContainer>
          <AboutImg src={pistachioTree2} alt="greek pistachio tree" />
        </AboutImgContainer>
        <AboutImgContainer>
          <AboutImg src={pistachioTree3} alt="greek pistachio tree" />
        </AboutImgContainer>
        <AboutTextTitle>exceptional taste</AboutTextTitle>
        <AboutTextBody>
          The hot and dry climate, low humidity, the proximity of the sea, the
          unique soil composition of Aegina island, and finally after harvesting
          letting them naturally dry in sun lend them exceptional flavor and
          aroma.
        </AboutTextBody>
        <AboutImgContainer columnSpan={6}>
          <AboutImg src={pistachios} alt="greek pistachios" />
        </AboutImgContainer>
        <AboutTextTitle>premium pistachios</AboutTextTitle>
        <AboutTextBody>
          Aegina island have a very limited production of pistachios and the
          annual output varies each year. The rich in nutrients pistachio nuts
          and the limited production makes our pistachios a premium product.
        </AboutTextBody>
      </AboutInfoContainer>
    </AboutContainer>
  </Container>
);

export default Benefits;
