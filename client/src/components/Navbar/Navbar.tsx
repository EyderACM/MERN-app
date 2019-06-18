import React from 'react';
import { NavbarContainer } from './NavbarContainer';
import { H1 } from '../ui/H1/H1';

export const Navbar: React.FC = () => (
  <NavbarContainer dynamic={false}>
    <H1 weight='semi-bold'>Stuff</H1>
  </NavbarContainer>
);
