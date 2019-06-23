import * as React from 'react';
import { GlobalWrapper } from './components/GlobalWrapper/GlobalWrapper';
import { LandingPage } from './Views/LandingPage/LandingPage';
import { LoginPage } from './Views/Login/LoginPage';
import { SignupPage } from './Views/SignupPage/SignupPage';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { store } from './store';

export const App: React.FC = () => (
  <Provider store={store}>
    <React.Fragment>
      <GlobalWrapper>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' exact={true} component={LandingPage} />
            <Route path='/login' exact={true} component={LoginPage} />
            <Route path='/signup' exact={true} component={SignupPage} />
          </Switch>
        </BrowserRouter>
      </GlobalWrapper>
    </React.Fragment>
  </Provider>
);
