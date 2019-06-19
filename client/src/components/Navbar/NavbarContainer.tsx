import styled from 'styled-components';
import * as Colors from '../../styles/Colors';
import * as Units from '../../styles/Units';

export interface INavbarContainerProps {
  dynamic?: false | true;
}

export const NavbarContainer = styled.div<INavbarContainerProps>`
  align-items: center;
  background: ${props => (props.dynamic ? 'white' : Colors.PRIMARY_BLUE)}
  color: black;
  display: flex;      
  height: 100px;
  justify-content: center;
  position: fixed;
  width: 100vw;

  @media(min-width: ${Units.MIN_DESKTOP_WIDTH}){
    justify-content: space-between;    
    padding:  0 70px 0 70px;
    width: calc(100vw - 140px);
  }
`;
