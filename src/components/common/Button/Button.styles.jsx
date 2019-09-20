// import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';

export const ButtonContainer = styled(Button)({
  borderRadius: 0,
  fontWeight: 600,
  margin: props => (props.margin ? props.margin : '0')
});
