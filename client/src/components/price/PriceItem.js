import React from 'react';
import { Card, Label } from 'semantic-ui-react';
import PriceBatches from './PriceBatches';

const PriceItem = ({ item }) => {
  const {
    product_id,
    product_uid,
    product,
    vital,
    count,
    drugstore,
    batches,
    barcodes
  } = item;

  const getBarcodes = barcodes => {
    if (barcodes.length > 0) {
      return `ШК: ${barcodes.join(', ')}`;
    }
    return '';
  };

  const getUpdateStr = d => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false
    };
    const dateStr = new Intl.DateTimeFormat('ru-RU', options).format(d);
    return `Обновлено: ${dateStr}`;
  };

  return (
    <Card fluid key={product_uid} color={vital ? 'red' : 'green'}>
      <Card.Content>
        <Card.Header>
          {product}
          <Label style={{ float: 'right' }} size="big">
            {count} шт
          </Label>
        </Card.Header>
        <Card.Meta>
          [{product_id}] {getBarcodes(barcodes)}
        </Card.Meta>
        <Card.Description>
          <Label horizontal>{drugstore.drugstore_name}</Label>

          {getUpdateStr(drugstore.updatedAt)}

          <PriceBatches batches={batches} />
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default PriceItem;
