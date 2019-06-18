import styled from 'styled-components';
import { fontWeight, fontColor } from '../utils';

export interface IH3Props {
  color?: 'primary' | 'secondary';
  weight?: 'regular' | 'semi-bold';
}

export const H3 = styled.h3<IH3Props>`
  color: ${props => fontColor(props.color)};
  font-family: Montserrat;
  font-size: 17px;
  font-weight: ${props => fontWeight(props.weight)};
  margin: 0;
`;
