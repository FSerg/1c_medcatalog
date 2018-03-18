import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { YMInitializer } from 'react-yandex-metrika';
import { Container } from 'semantic-ui-react';

import PrivateRoute from './authentication/AuthenticatedRoute';
import LoginPage from './authentication/LoginPage';
import SignupPage from './authentication/SignupPage';

import NavigationBar from './navbar/NavigationBar';
import Landing from './Landing';
import PricePage from './price/PricePage';
import DrugstoresList from './drugstores/DrugstoresList';
import UsersList from './users/UsersList';
import Page from './Page';

class App extends Component {
  render() {
    return (
      <div>
        <YMInitializer
          accounts={[parseInt(process.env.REACT_APP_YM_ID, 10)]}
          version="2"
          options={{
            clickmap: true,
            trackLinks: true,
            trackHash: true,
            accurateTrackBounce: true,
            webvisor: true
          }}
        />

        <NavigationBar />

        <Container style={{ marginTop: '5em' }}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <PrivateRoute path="/price" component={PricePage} />
            <PrivateRoute path="/drugstores" component={DrugstoresList} />
            <PrivateRoute path="/users" component={UsersList} />
            <Route path="/page" component={Page} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
