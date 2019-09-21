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
  padding: 2em 0;
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
