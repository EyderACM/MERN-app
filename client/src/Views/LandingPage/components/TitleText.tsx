import styled from 'styled-components';
import { H1 } from '../../../components/ui/H1/H1';
import * as Units from '../../../styles/Units';

export const TitleText = styled(H1)`
  @media (min-width: ${Units.MIN_DESKTOP_WIDTH}) {
    font-size: 40px;
    line-height: 50px;
  }
`;
