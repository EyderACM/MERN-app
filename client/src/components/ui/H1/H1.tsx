import styled from 'styled-components';
import { fontWeight, fontColor } from '../utils';

export interface IH1Props {
  color?: 'primary' | 'secondary';
  weight?: 'regular' | 'semi-bold';
}

export const H1 = styled.div<IH1Props>`
  color: ${props => fontColor(props.color)};
  font-family: Montserrat;
  font-size: 24px;
  font-weight: ${props => fontWeight(props.weight)};
`;
