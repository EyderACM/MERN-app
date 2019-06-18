import styled from 'styled-components';

export interface INavbarContainerProps {
  dynamic?: false | true;
}

export const NavbarContainer = styled.div<INavbarContainerProps>`
  align-items: center;
  background: ${props => (props.dynamic ? 'blue' : '')}
  color: black;
  display: flex;    
  height: 6rem;
  justify-content: center;
`;
