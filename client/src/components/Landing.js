import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header, Button } from 'semantic-ui-react';

const Landing = ({ isAuthenticated }) => (
  <Container text textAlign="center" style={{ padding: '8em 0em' }}>
    <Header as="h3" style={{ fontSize: '3em' }}>
      Аптечный прайс
    </Header>
    <p style={{ fontSize: '1.5em', fontWeight: 'normal' }}>
      Каталог аптечных товаров с ценами и остатками по всей сети
    </p>
    {isAuthenticated ? (
      <Button primary size="huge" as={Link} to="/price">
        Поиск
      </Button>
    ) : (
      <Button primary size="huge" as={Link} to="/login">
        Войти в систему
      </Button>
    )}
  </Container>
);

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

Landing.defaultProps = {
  isAuthenticated: false
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(Landing);
