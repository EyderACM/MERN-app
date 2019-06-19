import styled from 'styled-components';
import * as Colors from '../../styles/Colors';

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
  position: absolute;
  width: 100vw;
`;
