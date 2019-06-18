import * as React from 'react';
import { GlobalWrapper } from './components/GlobalWrapper/GlobalWrapper';
import { LandingPage } from './Views/LandingPage/LandingPage';
export const App: React.FC = () => (
  <React.Fragment>
    <GlobalWrapper>
      <LandingPage />
    </GlobalWrapper>
  </React.Fragment>
);
