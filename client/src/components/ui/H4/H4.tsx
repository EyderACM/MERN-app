import styled from 'styled-components';
import { fontWeight, fontColor } from '../utils';

export interface IH4Props {
  color?: 'primary' | 'secondary';
  weight?: 'regular' | 'semi-bold';
}

export const H4 = styled.h4<IH4Props>`
  color: ${props => fontColor(props.color)};
  font-family: Montserrat;
  font-size: 14px;
  font-weight: ${props => fontWeight(props.weight)};
  margin: 0;
`;
