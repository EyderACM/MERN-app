import * as React from 'react';
import { GlobalWrapper } from './components/GlobalWrapper/GlobalWrapper';
import { MainImage } from './components/MainImage/MainImage';
export const App: React.FC = () => (
  <React.Fragment>
    <GlobalWrapper>
      <MainImage />
    </GlobalWrapper>
  </React.Fragment>
);
