import React from 'react';
import { NavbarContainer } from './NavbarContainer';
import { Logo } from '../ui/Logo/Logo';
import { H4 } from '../ui/H4/H4';
import { NavbarOptionsContainer } from './NavbarOptionsContainer';

export const Navbar: React.FC = () => (
  <NavbarContainer dynamic={true}>
    <Logo color='primary'>Linkedon</Logo>
    <NavbarOptionsContainer>
      <H4 color='primary'>Placeholder</H4>
    </NavbarOptionsContainer>
  </NavbarContainer>
);
