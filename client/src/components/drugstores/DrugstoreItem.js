import React from 'react';
import { Card, Table, Label, Button } from 'semantic-ui-react';

const DrugstoreItem = ({ item, userRole, delDrugstore }) => {
  const { drugstore_uid, drugstore_name, inn, address, phone, email } = item;

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

  const renderButton = () => {
    if (userRole === 'admin') {
      return (
        <Button
          floated="right"
          negative
          size="mini"
          onClick={() => delDrugstore(drugstore_uid)}
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
          [ИНН: {inn}] {drugstore_uid}
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

export default DrugstoreItem;
