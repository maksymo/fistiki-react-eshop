import styled from 'styled-components';

export const TopBannerContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30em 30em;
  grid-gap: 2em;
  margin: 2em;
`;

export const BannerLeft = styled.figure`
  grid-column: span 1;
  grid-row: span 2;
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
