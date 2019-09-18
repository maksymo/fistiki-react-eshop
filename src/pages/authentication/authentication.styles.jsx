import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  padding: 2em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'img img form form'
    'img img form form';
  @media (max-width: 956px) {
    grid-template-areas:
      'img form form form'
      'img form form form';
  }
  @media (max-width: 768px) {
    grid-template-rows: 20em auto;
    grid-template-areas:
      'img img img img'
      'form form form form';
  }
`;

export const AuthenticationImgContainer = styled.div`
  grid-area: img;
`;

export const AuthenticationImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AuthenticationFormContainer = styled.div`
  grid-area: form;
`;
