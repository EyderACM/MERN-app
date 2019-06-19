import styled from 'styled-components';
import * as Units from '../../styles/Units';

export const NavbarOptionsContainer = styled.div`
  margin: 0;
  padding: 0;
  display: none;

  @media(min-width: ${Units.MIN_DESKTOP_WIDTH}){
    display: flex;
    flex-direction: row;
  }
`

