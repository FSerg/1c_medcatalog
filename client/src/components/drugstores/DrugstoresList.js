import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider, Card, Message, Loader } from 'semantic-ui-react';

import { getDrugstores, delDrugstore } from '../../actions/drugstoresActions';
import DrugstoreItem from './DrugstoreItem';

class DrugstoresList extends Component {
  componentDidMount() {
    this.props.getDrugstores();
  }

  render() {
    return (
      <div>
        {this.props.error ? (
          <Message negative>
            <Message.Header>Что-то пошло не так!</Message.Header>
            <p>{this.props.error}</p>
          </Message>
        ) : null}

        {this.props.isLoading ? (
          <Loader
            active
            size="large"
            inline="centered"
            style={{ marginTop: '5em', marginBottom: '5em' }}
          />
        ) : (
          <div style={{ padding: '2em 0em' }}>
            <h2>Список аптек</h2>
            <Divider />
            <Card.Group stackable itemsPerRow={2}>
              {this.props.drugstores.map(item => (
                <DrugstoreItem
                  key={item._id}
                  item={item}
                  userRole={this.props.userRole}
                  delDrugstore={this.props.delDrugstore}
                />
              ))}
            </Card.Group>
          </div>
        )}
      </div>
    );
  }
}

DrugstoresList.propTypes = {
  getDrugstores: PropTypes.func.isRequired,
  delDrugstore: PropTypes.func.isRequired,
  drugstores: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  userRole: PropTypes.string
};

DrugstoresList.defaultProps = {
  drugstores: [],
  isLoading: false,
  error: '',
  userRole: 'user'
};

const mapStateToProps = state => {
  return {
    drugstores: state.drugstoresStore.drugstores,
    isLoading: state.drugstoresStore.isLoading,
    error: state.drugstoresStore.error,
    userRole: state.auth.user.role
  };
};

export default connect(mapStateToProps, { getDrugstores, delDrugstore })(
  DrugstoresList
);
