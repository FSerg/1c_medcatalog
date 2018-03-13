import React from 'react';
import TimeAgo from 'react-time-ago';
import jsTimeAgo from 'javascript-time-ago';
import ru from 'javascript-time-ago/locale/ru';
import get from 'lodash/get';
import { Label } from 'semantic-ui-react';

jsTimeAgo.locale(ru);

const PriceBatchDates = ({ batch, size }) => {
  const batchDate = get(batch, 'expiration_date');

  const getDate = d => {
    return new Date(d);
  };

  const getDateStr = d => {
    const dateStr = new Intl.DateTimeFormat('ru-RU').format(getDate(d));
    return `Срок: ${dateStr} / `;
  };

  const renderDates = d => {
    if (getDate(d) > new Date()) {
      return (
        <Label size={size}>
          {getDateStr(d)} (<TimeAgo locale="ru-RU">{getDate(d)}</TimeAgo>)
        </Label>
      );
    }
    return (
      <Label color="red" size={size}>
        {getDateStr(d)} (<TimeAgo locale="ru-RU">{getDate(d)}</TimeAgo>)
      </Label>
    );
  };

  return !batchDate ? <div /> : renderDates(batchDate);
};

export default PriceBatchDates;
