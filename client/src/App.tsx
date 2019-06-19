import * as React from 'react';
import { GlobalWrapper } from './components/GlobalWrapper/GlobalWrapper';
import { LandingPage } from './Views/LandingPage/LandingPage';
import { Navbar } from './components/Navbar/Navbar';

export const App: React.FC = () => (
  <React.Fragment>
    <GlobalWrapper>
      <Navbar />
      <LandingPage />
    </GlobalWrapper>
  </React.Fragment>
);
