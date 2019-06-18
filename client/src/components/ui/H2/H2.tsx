import styled from 'styled-components';
import { fontWeight, fontColor } from '../utils';

export interface IH2Props {
  color?: 'primary' | 'secondary';
  weight?: 'regular' | 'semi-bold';
}

export const H2 = styled.h2<IH2Props>`
  color: ${props => fontColor(props.color)};
  font-family: Montserrat;
  font-size: 20px;
  font-weight: ${props => fontWeight(props.weight)};
`;
