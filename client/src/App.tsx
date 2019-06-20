import * as React from 'react';
import { GlobalWrapper } from './components/GlobalWrapper/GlobalWrapper';
import { LandingPage } from './Views/LandingPage/LandingPage';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

export const App: React.FC = () => (
  <React.Fragment>
    <GlobalWrapper>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/landingPage' exact={true} component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </GlobalWrapper>
  </React.Fragment>
);
