import React from 'react';
import { connect } from 'react-redux';
import { Card, Table, Label, Button } from 'semantic-ui-react';

import { showModal } from '../../actions/modalActions';
import { MODAL_TYPE_CONFIRMATION } from '../modal/modalTypes';

import { getUpdateStr } from '../../utils/Utils';

const DrugstoreItem = ({ item, userRole, showModal, delDrugstore }) => {
  const {
    drugstore_uid,
    drugstore_name,
    inn,
    address,
    phone,
    email,
    updatedAt
  } = item;

  const renderInfo = (title, value, color = null, size = 'medium') => {
    return (
      <Table.Row>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell textAlign="right">
          {color ? (
            <Label color={color} size={size}>
              {value}
            </Label>
          ) : (
            <b>{value}</b>
          )}
        </Table.Cell>
      </Table.Row>
    );
  };

  const showConfirm = () => {
    showModal(MODAL_TYPE_CONFIRMATION, {
      title: `Удалить аптеку: ${drugstore_name}?`,
      onConfirm: isConfirmed => {
        if (isConfirmed) {
          delDrugstore(drugstore_uid);
        }
      }
    });
  };

  const renderButton = () => {
    if (userRole === 'admin') {
      return (
        <Button
          floated="right"
          negative
          size="mini"
          onClick={() => showConfirm()}
        >
          Удалить
        </Button>
      );
    }
    return null;
  };

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{drugstore_name}</Card.Header>
        <Card.Meta>
          [ИНН: {inn}] {getUpdateStr(updatedAt)}
        </Card.Meta>
        <Card.Description>
          <Table compact="very">
            <Table.Body>
              {renderInfo('Телефон', phone, 'teal', 'large')}
              {renderInfo('E-mail', email, null, 'large')}
              {renderInfo('Адрес', address)}
            </Table.Body>
          </Table>

          {renderButton()}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default connect(null, { showModal })(DrugstoreItem);
