import styled from 'styled-components';
import { Container, Button } from '@material-ui/core';
import { styled as materialStyled } from '@material-ui/styles';

export const ProductPageContainer = styled(Container)``;

export const ProductName = styled.h1`
  text-transform: uppercase;
  margin-bottom: 0.2em;
`;

export const ShortDescription = styled.div`
  color: #a2a2a2;
  font-size: 1.2em;
`;

export const LongDescription = styled.div`
  font-family: 'PT Serif', serif;
  font-size: 1.3em;
`;

export const ProductCode = styled.div`
  color: #bbbbbb;
  margin: 1.3em 0;
`;

export const Price = styled.div`
  font-size: 2em;
  margin: 1em 0;
`;

export const Metric = styled.span`
  font-size: 0.5em;
  color: grey;
`;

export const QuantityContainer = styled.div`
  margin: 4em 0;
  display: flex;
  align-items: center;
`;

export const QuantityInput = styled.input`
  border-radius: 0;
  margin-top: 0;
  height: 2rem;
  font-size: 1.3em;
  width: 3rem;
  text-align: center;
  border: 1px solid #ececec;
`;

export const QuantityArrows = materialStyled(Button)({
  borderRadius: 0,
  minHeight: '2.25rem',
  minWidth: '2rem',
  backgroundColor: '#ececec'
});
