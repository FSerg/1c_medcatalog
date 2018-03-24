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
    const { drugstore_uid } = this.props;
    axios
      .get('/api/drugstore', { headers: authData, params: { drugstore_uid } })
      .then(response => {
        this.setState({ drugstore: response.data.result, isLoading: false });
      })
      .catch(error => {
        let errMsg = 'Не удалось получить информацию по Аптеке из БД';
        if (error.response) {
          errMsg = error.response.data.result;
        }
        this.setState({ drugstore: null, error: errMsg, isLoading: false });
      });
  }

  renderQuickView() {
    if (this.state.error) {
      return (
        <Message negative>
          <p>{this.state.error}</p>
        </Message>
      );
    }

    if (this.state.isLoading) {
      return (
        <Loader
          active
          size="small"
          inline="centered"
          style={{ marginTop: '1em', marginBottom: '1em' }}
        />
      );
    }
    return <DrugstoreItem item={this.state.drugstore} />;
  }

  render() {
    return <div style={{ paddingTop: '1em' }}>{this.renderQuickView()}</div>;
  }
}

DrugstoreQuickView.propTypes = {
  drugstore_uid: PropTypes.string.isRequired
};

export default DrugstoreQuickView;
