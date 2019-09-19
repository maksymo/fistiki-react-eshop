import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  padding: 2em;
  display: grid;
  grid-gap: 3em;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'img form'
    'img form';
  @media (max-width: 768px) {
    grid-template-rows: auto 20em;
    grid-template-areas:
      'form form'
      'img img';
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
