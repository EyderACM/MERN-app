import styled from 'styled-components';
import * as Units from '../../styles/Units';

export const NavbarTopList = styled.ul`
  @media (min-width: ${Units.MIN_DESKTOP_WIDTH}) {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }
`;
