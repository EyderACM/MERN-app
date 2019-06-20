import * as React from 'react';
import { GlobalWrapper } from './components/GlobalWrapper/GlobalWrapper';
import { LandingPage } from './Views/LandingPage/LandingPage';
import { LoginPage } from './Views/Login/LoginPage';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

export const App: React.FC = () => (
  <React.Fragment>
    <GlobalWrapper>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact={true} component={LandingPage} />
          <Route path='/login' exact={true} component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </GlobalWrapper>
  </React.Fragment>
);
