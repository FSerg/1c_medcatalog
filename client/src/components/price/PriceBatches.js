import React from 'react';
import { Table, Label } from 'semantic-ui-react';
import get from 'lodash/get';
import PriceBatchDates from './PriceBatchDates';

const PriceBatches = ({ batches }) => {
  const getValue = (batch, name, title) => {
    if (get(batch, name)) {
      return `${title}: ${batch[name]}`;
    }
    return '';
  };

  const renderBatchInfo = batch => {
    return `[${batch.batch_id}] ${getValue(batch, 'batch_name', 'Серия')} / 
    ${getValue(batch, 'producer', 'Производитель')}`;
  };

  return (
    <Table compact="very">
      <Table.Body>
        {batches.map(batch => (
          <Table.Row key={batch.batch_uid}>
            <Table.Cell>{renderBatchInfo(batch)}</Table.Cell>
            <Table.Cell textAlign="right">
              <PriceBatchDates size={'large'} batch={batch} />
              <Label color="teal" size="large">
                {batch.price} р
              </Label>
              <Label color="blue" size="large">
                {batch.count} шт
              </Label>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default PriceBatches;
