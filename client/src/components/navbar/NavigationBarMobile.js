import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Menu, Label, Button, Icon } from 'semantic-ui-react';

import { signoutUser } from '../../actions/authActions';
import UserMenu from './UserMenu';

class NavigationBarMobile extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <Menu stackable>
        <Container>
          <Label
            as={NavLink}
            exact
            to="/"
            size="big"
            style={{
              marginLeft: '5px',
              marginTop: '5px',
              marginBottom: '5px'
            }}
          >
            Аптеки Альфа <Icon style={{ paddingLeft: '10px' }} name="phone" />8
            (86133) 49-333
          </Label>

          <Menu.Item as={NavLink} to="/price">
            <Button primary>Поиск по каталогу</Button>
          </Menu.Item>
          <Menu.Item as={NavLink} to="/drugstores">
            Адреса аптек
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/discounts">
            Бонусная программа
          </Menu.Item>

          {!authenticated ? (
            <Menu.Menu position="right">
              <Menu.Item as={NavLink} to="/login">
                Вход в систему
              </Menu.Item>
              <Menu.Item as={NavLink} to="/signup">
                Регистрация
              </Menu.Item>
            </Menu.Menu>
          ) : (
            <UserMenu
              user={this.props.user}
              signoutUser={this.props.signoutUser}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

NavigationBarMobile.propTypes = {
  signoutUser: PropTypes.func.isRequired,
  authenticated: PropTypes.bool
};

NavigationBarMobile.defaultProps = {
  authenticated: false
};

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    user: state.auth.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { signoutUser }
  )(NavigationBarMobile)
);
