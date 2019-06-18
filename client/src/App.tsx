import * as React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { GlobalWrapper } from './components/GlobalWrapper/GlobalWrapper';
import { H6 } from './components/ui/H6/H6';

export const App: React.FC = () => (
  <React.Fragment>
    <GlobalWrapper>
      <Navbar />
      <H6 color='secondary' weight='semi-bold'>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </H6>
    </GlobalWrapper>
  </React.Fragment>
);
