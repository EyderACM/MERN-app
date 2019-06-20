import React from 'react';
import { NavbarContainer } from './NavbarContainer';
import { Logo } from '../ui/Logo/Logo';
import { H4 } from '../ui/H4/H4';
import { NavbarOptionsContainer } from './NavbarOptionsContainer';
import { Link } from 'react-router-dom';
import { NavbarTopList } from './NavbarTopList';
import { NavbarListItem } from './NavbarListItem';

export const Navbar: React.FC = () => (
  <NavbarContainer dynamic={true}>
    <Logo color='primary'>Linkedon</Logo>
    <NavbarOptionsContainer>
      <NavbarTopList>
        <NavbarListItem>
          <H4>
            <Link to='/profiles' style={{ textDecoration: 'none' }}>
              Developers
            </Link>
          </H4>
        </NavbarListItem>
        <NavbarListItem>
          <H4>
            <Link to='/Login' style={{ textDecoration: 'none' }}>
              Login
            </Link>
          </H4>
        </NavbarListItem>
        <NavbarListItem>
          <H4>
            <Link to='/SignUp' style={{ textDecoration: 'none' }}>
              Sign Up
            </Link>
          </H4>
        </NavbarListItem>
      </NavbarTopList>
    </NavbarOptionsContainer>
  </NavbarContainer>
);
