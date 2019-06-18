import styled from 'styled-components';
import { fontWeight, fontColor } from '../utils';

export interface IH6Props {
  color?: 'primary' | 'secondary';
  weight?: 'regular' | 'semi-bold';
}

export const H6 = styled.h6<IH6Props>`
  color: ${props => fontColor(props.color)};
  font-family: Montserrat;
  font-size: 10px;
  font-weight: ${props => fontWeight(props.weight)};
  margin: 0;
`;
