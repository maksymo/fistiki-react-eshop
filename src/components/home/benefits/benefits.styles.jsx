import styled from 'styled-components';

export const BenefitsContainer = styled.div`
  margin: 5em 0;
  padding: 3em 1em 0;
  background-image: url('https://via.placeholder.com/1500x300/ccc');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20em;
`;

export const BenefitItemsWrapper = styled.div`
  display: flex;
  padding: 1em;
  align-items: center;
`;

export const BenefitItemContainer = styled.div`
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const BenefitItemTitle = styled.div`
  margin: 0.5em 0;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
`;

export const BenefitItemSubtitle = styled.p`
  margin: 0.5em 0;
  padding: 0;
  font-family: 'PT Serif', serif;
`;
