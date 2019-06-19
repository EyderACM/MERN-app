import styled from 'styled-components';
import * as Units from '../../../styles/Units';

export const LandingPageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 100vh;

  @media (min-width: ${Units.MIN_DESKTOP_WIDTH}) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }

`;
