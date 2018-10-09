import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { YMInitializer } from 'react-yandex-metrika';
import { Container } from 'semantic-ui-react';

import PrivateRoute from './authentication/AuthenticatedRoute';
import LoginPage from './authentication/LoginPage';
import SignupPage from './authentication/SignupPage';

import Config from './Config';

import NavigationBar from './navbar/NavigationBar';
import Landing from './Landing';
import Discounts from './discounts/Discounts';
import PricePage from './price/PricePage';
import DrugstoresList from './drugstores/DrugstoresList';
import UsersList from './users/UsersList';
import Page from './Page';
import ModalRootContainer from './modal/ModalRootContainer';

class App extends Component {
  render() {
    return (
      <div>
        <YMInitializer
          accounts={[parseInt(Config.YandexID, 10)]}
          version="2"
          options={{
            clickmap: true,
            trackLinks: true,
            trackHash: true,
            accurateTrackBounce: true,
            webvisor: true
          }}
        />
        <ModalRootContainer />
        <NavigationBar />

        <Container style={{ marginTop: '5em' }}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={LoginPage} />
            <Route path="/discounts" component={Discounts} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/price" component={PricePage} />
            <Route path="/drugstores" component={DrugstoresList} />
            <PrivateRoute path="/users" component={UsersList} />
            <Route path="/page" component={Page} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
