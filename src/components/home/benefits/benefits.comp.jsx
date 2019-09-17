import React from 'react';

import {
  BenefitsContainer,
  BenefitItemsWrapper,
  BenefitItemContainer,
  BenefitItemTitle,
  BenefitItemSubtitle
} from './Benefits.styles';
import { Title, Subtitle } from '../../../App.styles';

const Benefits = () => (
  <BenefitsContainer>
    <Title>Greek Pistachio Health Benefits</Title>
    <Subtitle>
      Studies have shown that pistachios have multiple health benefits and are
      classified as superfood.
    </Subtitle>
    <BenefitItemsWrapper>
      <BenefitItemContainer>
        <BenefitItemTitle>Good for your heart!</BenefitItemTitle>
        <BenefitItemSubtitle>
          Pistachios can reduce the risk of heart problems.
        </BenefitItemSubtitle>
      </BenefitItemContainer>
      <BenefitItemContainer>
        <BenefitItemTitle>Beneficial for your vision!</BenefitItemTitle>
        <BenefitItemSubtitle>
          Pistachios contain ingredients which have beneficial effect on eyes.
        </BenefitItemSubtitle>
      </BenefitItemContainer>
      <BenefitItemContainer>
        <BenefitItemTitle>Pistachios can help us get slimmer!</BenefitItemTitle>
        <BenefitItemSubtitle>
          Pistachios help cut appetite and do not raise the blood sugar levels.
        </BenefitItemSubtitle>
      </BenefitItemContainer>
    </BenefitItemsWrapper>
  </BenefitsContainer>
);

export default Benefits;
