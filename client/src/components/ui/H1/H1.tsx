import styled from 'styled-components';
import { fontWeight } from './utils';

export interface IH1Props {
  dynamic?: true | false;
  weight?: 'regular' | 'semi-bold';
}

export const H1 = styled.div<IH1Props>`
  color: ${props => (props.dynamic ? '#4286f4' : 'white')};
  font-family: Montserrat;
  font-size: 24px;
  font-weight: ${props => fontWeight(props.weight)};
`;
