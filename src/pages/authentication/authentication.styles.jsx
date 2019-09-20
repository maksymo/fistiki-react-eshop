import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
`;

export const AuthenticationImgContainer = styled.div`
  flex: 1;
  margin-right: 3em;
  @media (max-width: 1100px) {
    max-width: 25rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AuthenticationImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AuthenticationFormContainer = styled.div`
  flex: 1;
`;

export const AuthenticationFormWrapper = styled.div`
  @media (min-width: 769px) {
    max-width: 30rem;
    margin: 0 auto;
  }
`;

export const SocialSignInContainer = styled.div`
  text-align: center;
  margin: 1em 0;
`;

export const FormTitle = styled.div`
  margin: 1.5em 0 0;
  color: #a2a2a2;
  text-align: center;
`;

// export const AuthenticationContainer = styled.div`
//   display: grid;
//   grid-gap: 3em;
//   grid-template-columns: 1fr 1fr;
//   grid-template-areas:
//     'img form'
//     'img form';
//   @media (max-width: 768px) {
//     grid-template-rows: auto 20em;
//     grid-template-areas:
//       'form form'
//       'img img';
//   }
// `;

// export const AuthenticationImgContainer = styled.div`
//   grid-area: img;
// `;

// export const AuthenticationImg = styled.img`
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// export const AuthenticationFormContainer = styled.div`
//   grid-area: form;
// `;
