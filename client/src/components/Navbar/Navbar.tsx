import React from 'react';
import { NavbarContainer } from './NavbarContainer';
import { Logo } from '../ui/Logo/Logo';

export const Navbar: React.FC = () => (
  <NavbarContainer dynamic={false}>
    <Logo>Linkedon</Logo>
  </NavbarContainer>
);
