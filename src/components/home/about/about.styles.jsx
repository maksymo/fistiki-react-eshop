import styled from 'styled-components';

export const AboutContainer = styled.div`
  margin: 5em 0;
  padding: 3em 1em 0;
`;

export const AboutInfoContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  /* grid-template-rows: auto; */
  grid-gap: 3em;
`;

export const AboutImgContainer = styled.div`
  grid-column: span ${props => (props.columnSpan ? props.columnSpan : '2')};
  background-color: red;
  height: 20em;
`;

export const AboutImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AboutTextTitle = styled.h1`
  font-size: 3em;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  max-width: 9em;
  margin: 0.5em 0;
  grid-column: span 3;
  @media (max-width: 768px) {
    grid-column: span 6;
  }
`;

export const AboutTextBody = styled.p`
  font-size: 1.6em;
  font-family: 'PT Serif', serif;
  font-style: italic;
  margin: 0.5em 0;
  padding: 0;
  grid-column: span 3;
  @media (max-width: 768px) {
    grid-column: span 6;
  }
`;
