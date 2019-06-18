import styled from 'styled-components';
import { fontWeight, fontColor } from '../utils';

export interface IH5Props {
  color?: 'primary' | 'secondary';
  weight?: 'regular' | 'semi-bold';
}

export const H5 = styled.h5<IH5Props>`
  color: ${props => fontColor(props.color)};
  font-family: Montserrat;
  font-size: 12px;
  font-weight: ${props => fontWeight(props.weight)};
  margin: 0;
`;
