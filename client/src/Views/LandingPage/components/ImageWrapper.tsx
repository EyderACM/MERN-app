import styled from 'styled-components';
import * as Units from '../../../styles/Units';

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;  
  
  @media (min-width: ${Units.MIN_DESKTOP_WIDTH}) {
    svg {
      align-items: center;      
      width: 500px;
      height: 750px;      
      padding-bottom: 50px;
    }
  }

`;
