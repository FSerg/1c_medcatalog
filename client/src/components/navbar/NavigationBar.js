import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Statistic,
  Menu,
  Label,
  Button,
  Icon,
} from "semantic-ui-react";

import { signoutUser } from "../../actions/authActions";
import UserMenu from "./UserMenu";

class NavigationBar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <Menu fixed="top">
        <Container>
          <Statistic
            as={NavLink}
            exact
            to="/"
            size="tiny"
            color="grey"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <Statistic.Label>Аптеки Альфа</Statistic.Label>
            <Statistic.Value>+7-918-6401077</Statistic.Value>
          </Statistic>
          <Menu.Item as={NavLink} to="/price">
            <Button primary>Поиск по каталогу</Button>
          </Menu.Item>
          <Menu.Item as={NavLink} to="/drugstores">
            Адреса <br />
            аптек
          </Menu.Item>
          {/* <Menu.Item as={NavLink} exact to="/discounts">
            Бонусная <br />
            программа
          </Menu.Item> */}
          {!authenticated ? (
            <Menu.Menu position="right">
              <Menu.Item as={NavLink} to="/login">
                Вход в<br />
                систему
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

NavigationBar.propTypes = {
  signoutUser: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
};

NavigationBar.defaultProps = {
  authenticated: false,
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
    user: state.auth.user,
  };
};

export default withRouter(
  connect(mapStateToProps, { signoutUser })(NavigationBar)
);
