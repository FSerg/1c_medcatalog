import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { Input, Card, Divider, Message, Loader } from 'semantic-ui-react';

import { findPrices } from '../../actions/priceActions';
import PriceItem from './PriceItem';

class PricePage extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    SearchString: ''
  };

  setSearch = debounce(SearchString => {
    if (SearchString === '') {
      this.setState({ SearchString });
    } else {
      this.setState({ SearchString });
    }
    // console.log(this.state.SearchString);
    this.props.findPrices(this.state.SearchString);
  }, 500);

  handleChange = (e, { value }) => {
    this.setSearch(value);
  };

  render() {
    return (
      <div>
        <Input
          fluid
          size="massive"
          icon="search"
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <Divider horizontal>Результаты поиска</Divider>

        {this.props.error ? (
          <Message negative>
            <Message.Header>Что-то пошло не так!</Message.Header>
            <p>{this.props.error}</p>
          </Message>
        ) : (
          <div />
        )}

        {this.props.isLoading ? (
          <Loader
            active
            size="large"
            inline="centered"
            style={{ marginTop: '5em', marginBottom: '5em' }}
          />
        ) : (
          <Card.Group>
            {this.props.finded_prices.map(item => {
              return <PriceItem key={item._id} item={item} />;
            })}
          </Card.Group>
        )}
      </div>
    );
  }
}

PricePage.propTypes = {
  findPrices: PropTypes.func.isRequired,
  finded_prices: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool
};

PricePage.defaultProps = {
  finded_prices: [],
  error: '',
  isLoading: false
};

const mapStateToProps = state => {
  return {
    finded_prices: state.priceStore.finded_prices,
    isLoading: state.priceStore.isLoading,
    error: state.priceStore.error
  };
};

export default connect(mapStateToProps, { findPrices })(PricePage);
