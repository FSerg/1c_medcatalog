import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Grid, Header, Button } from 'semantic-ui-react';

const Landing = ({ isAuthenticated }) => (
  <Container text textAlign="center" style={{ padding: '8em 0em' }}>
    <Header as="h3" style={{ fontSize: '3em' }}>
      Аптеки Альфа
    </Header>
    <p style={{ fontSize: '1.5em', fontWeight: 'normal' }}>
      Единый прайс сети аптек Альфа
    </p>

    <Grid divided="vertically">
      <Grid.Row columns={1}>
        <Grid.Column>
          <Button primary size="huge" as={Link} to="/price">
            Поиск по каталогу
          </Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column>
          <Button size="huge" as={Link} to="/drugstores">
            Адреса и телефоны
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button size="huge" as={Link} to="/discounts">
            Бонусная программа
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
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
