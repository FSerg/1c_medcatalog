import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Message, Loader } from 'semantic-ui-react';

import DrugstoreItem from './DrugstoreItem';

class DrugstoreQuickView extends Component {
  state = {
    drugstore: null,
    error: '',
    isLoading: true
  };

  componentDidMount() {
    const authData = { authorization: localStorage.getItem('token') };
    const drugstore_uid = this.props.drugstore_uid;
    axios
      //.get(this.props.url)
      .get('/api/drugstore', { headers: authData, params: { drugstore_uid } })
      .then(response => {
        this.setState({ drugstore: response.data.result, isLoading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error, isLoading: false });
      });
  }

  render() {
    return (
      <div style={{ paddingTop: '1em' }}>
        {this.state.error ? (
          <Message negative>
            <p>{this.state.error}</p>
          </Message>
        ) : null}

        {this.state.isLoading ? (
          <Loader
            active
            size="small"
            inline="centered"
            style={{ marginTop: '1em', marginBottom: '1em' }}
          />
        ) : (
          <DrugstoreItem item={this.state.drugstore} />
        )}
      </div>
    );
  }
}

DrugstoreQuickView.propTypes = {
  drugstore_uid: PropTypes.string.isRequired
};

export default DrugstoreQuickView;
