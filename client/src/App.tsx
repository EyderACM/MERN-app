import * as React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { GlobalWrapper } from './components/GlobalWrapper/GlobalWrapper';
import { H1 } from './components/ui/H1/H1';

export const App: React.FC = () => (
  <React.Fragment>
    <GlobalWrapper>
      <Navbar />
      <H1 dynamic={true} weight='semi-bold'>
        Testing
      </H1>
    </GlobalWrapper>
  </React.Fragment>
);
