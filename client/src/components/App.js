import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import PrivateRoute from './authentication/AuthenticatedRoute';
import LoginPage from './authentication/LoginPage';
import SignupPage from './authentication/SignupPage';

import NavigationBar from './navbar/NavigationBar';
import Landing from './Landing';
import PricePage from './price/PricePage';
import DrugstoresList from './drugstores/DrugstoresList';
import Page from './Page';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />

        <Container style={{ marginTop: '5em' }}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <PrivateRoute path="/price" component={PricePage} />
            <PrivateRoute path="/drugstores" component={DrugstoresList} />
            <Route path="/page" component={Page} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
