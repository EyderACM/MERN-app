import React from 'react';
import { NavbarContainer } from './NavbarContainer';
import { Logo } from '../ui/Logo/Logo';
import { H4 } from '../ui/H4/H4';
import { NavbarOptionsContainer } from './NavbarOptionsContainer';
import { NavbarTopList } from './NavbarTopList';
import { NavbarListItem } from './NavbarListItem';
import { NavbarListLink } from './NavbarListLink';

export const Navbar: React.FC = () => (
  <NavbarContainer dynamic={true}>
    <NavbarListLink to='/'>
      <Logo color='primary'>Linkedon</Logo>
    </NavbarListLink>
    <NavbarOptionsContainer>
      <NavbarTopList>
        <NavbarListItem>
          <H4>
            <NavbarListLink to='/profiles'>Developers</NavbarListLink>
          </H4>
        </NavbarListItem>
        <NavbarListItem>
          <H4>
            <NavbarListLink to='/Login'>Login</NavbarListLink>
          </H4>
        </NavbarListItem>
        <NavbarListItem>
          <H4>
            <NavbarListLink to='/SignUp'>Sign Up</NavbarListLink>
          </H4>
        </NavbarListItem>
      </NavbarTopList>
    </NavbarOptionsContainer>
  </NavbarContainer>
);
