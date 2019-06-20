import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Colors from '../../styles/Colors';

export const NavbarListLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: ${Colors.PRIMARY_BLUE};
  }

  &:hover {
    color: ${Colors.SCARY_GREY};
  }
`;
