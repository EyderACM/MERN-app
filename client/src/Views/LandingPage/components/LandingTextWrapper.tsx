import styled from "styled-components";
import * as Units from "styles/Units";

export const LandingTextWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 25px;
  padding: 0 25px;
  text-align: center;

  @media (min-width: ${Units.MIN_DESKTOP_WIDTH}) {
    width: calc(300px + 10vw);
  }
`;
