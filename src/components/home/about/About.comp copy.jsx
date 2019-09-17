import React from 'react';

import {
  AboutContainer,
  AboutTextContainer,
  AboutTextColumn,
  AboutTextTitle,
  AboutTextBody
} from './About.styles';
import { Title, Subtitle } from '../../../App.styles';

const Benefits = () => (
  <AboutContainer>
    <Title>Fistiki</Title>
    <Subtitle>Φιστίκι (Fistíki) is the greek word for pistachio.</Subtitle>
    <AboutTextContainer>
      <AboutTextColumn>
        <AboutTextTitle>the most famous pistachios</AboutTextTitle>
      </AboutTextColumn>
      <AboutTextColumn>
        <AboutTextBody>
          Aegina island have a very limited production of pistachios and the
          annual output varies each year. The rich in nutrients pistachio nuts
          and the limited production makes our pistachios a premium product.
        </AboutTextBody>
      </AboutTextColumn>
    </AboutTextContainer>
    <AboutTextContainer>
      <AboutTextColumn>
        <AboutTextTitle>exceptional taste</AboutTextTitle>
      </AboutTextColumn>
      <AboutTextColumn>
        <AboutTextBody>
          The hot and dry climate, low humidity, the proximity of the sea, the
          unique soil composition of Aegina island, and finally after harvesting
          letting them naturally dry in sun lend them exceptional flavor and
          aroma.
        </AboutTextBody>
      </AboutTextColumn>
    </AboutTextContainer>
    <AboutTextContainer>
      <AboutTextColumn>
        <AboutTextTitle>premium pistachios</AboutTextTitle>
      </AboutTextColumn>
      <AboutTextColumn>
        <AboutTextBody>
          Aegina island have a very limited production of pistachios and the
          annual output varies each year. The rich in nutrients pistachio nuts
          and the limited production makes our pistachios a premium product.
        </AboutTextBody>
      </AboutTextColumn>
    </AboutTextContainer>
  </AboutContainer>
);

export default Benefits;
