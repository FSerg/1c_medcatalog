import React, { Component } from 'react';
import { Card, Label, Grid } from 'semantic-ui-react';
import PriceBatches from './PriceBatches';
import DrugstoreQuickView from '../drugstores/DrugstoreQuickView';
import { getUpdateStr } from '../../utils/Utils';

class PriceItem extends Component {
  state = {
    showDrugstore: false
  };

  getBarcodes = barcodes => {
    if (barcodes.length > 0) {
      return `ШК: ${barcodes.join(', ')}`;
    }
    return '';
  };

  handleShowDrugstore = () => {
    this.setState({ showDrugstore: !this.state.showDrugstore });
  };

  renderDrugstoreLink = (drugstore, updatedAt) => {
    return (
      <Grid doubling columns={2}>
        <Grid.Row style={{ paddingTop: '0.5em', paddingBottom: '0.5em' }}>
          <Grid.Column>
            <a
              onClick={() => this.handleShowDrugstore(drugstore.drugstore_uid)}
            >
              {drugstore.drugstore_name}
            </a>
          </Grid.Column>
          <Grid.Column textAlign="right">{getUpdateStr(updatedAt)}</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };

  render() {
    const {
      product_id,
      product_uid,
      product,
      vital,
      count,
      drugstore,
      batches,
      barcodes,
      updatedAt
    } = this.props.item;

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
            [{product_id}] {this.getBarcodes(barcodes)}
          </Card.Meta>
          <Card.Description>
            {this.renderDrugstoreLink(drugstore, updatedAt)}
            {this.state.showDrugstore ? (
              <DrugstoreQuickView drugstore_uid={drugstore.drugstore_uid} />
            ) : null}
            <PriceBatches batches={batches} />
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default PriceItem;
