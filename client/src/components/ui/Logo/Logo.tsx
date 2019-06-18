import styled from 'styled-components';
import { fontWeight, fontColor } from '../utils';

export interface ILogoProps {
  color?: 'primary' | 'secondary';
}

export const Logo = styled.h1`
  color: ${props => fontColor(props.color)};
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
`;
