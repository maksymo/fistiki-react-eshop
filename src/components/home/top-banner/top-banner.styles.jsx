import styled from 'styled-components';

export const TopBannerContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30em 30em;
  grid-gap: 2em;
  @media (max-width: 1400px) {
    grid-template-rows: 25em 25em;
  }
  @media (max-width: 1024px) {
    grid-template-rows: 20em 20em;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 15em 15em;
  }
`;

export const BannerLeft = styled.figure`
  grid-column: span 1;
  grid-row: span 2;
  @media (max-width: 768px) {
    grid-row: span 1;
  }
`;

export const BannerRight = styled.figure`
  grid-column: span 1;
`;

export const BannerImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
