import axios from 'axios';
import dateFormat from 'date-fns/format';
import startOfYesterday from 'date-fns/start_of_yesterday';

import FakeMed from '../models/FakeMed';
import config from '../config/config';

const GetYesterday = () => dateFormat(startOfYesterday(), 'DD.MM.YYYY');

const errorMessage = (filed, filedName) => {
  const errorMessageStr = `Filed: [${filedName}] can't be empty!`;
  console.error(errorMessageStr);
  return errorMessageStr;
};

const checkField = (filed, filedName) => {
  if (!filed) {
    return errorMessage(filed, filedName);
  }
  return null;
};

const GetLink = str => {
  const regex = /<\s*a\s+[^>]*href\s*=\s*["]?([^\"' >]+)["]/gm;
  const match = regex.exec(str);
  if (match) {
    return `${config.urlLetter}${match[1]}`;
  }
  return '';
};

const ConvertFakeMeds = data => {
  return data.map(item => {
    return {
      name: item.col1.label,
      packaging: item.col2.title || item.col2.label,
      series: item.col3.label,
      producer: item.col4.label,
      country: item.col5.label,
      status: item.col6.label,
      type: item.col7.label,
      scope: item.col8.label,
      letter: item.col9.title,
      link: GetLink(item.col9.label),
      updated_drugstores: []
    };
  });
};

const GetFakeMeds = async (data1, data2) => {
  let result = { recordsTotal: 0, data: [] };
  await axios
    .get(config.urlAjax, {
      params: {
        length: '10000',
        let_from: data1,
        let_to: data2
      }
    })
    .then(response => {
      console.log('Data about fake meds successfully recieved');
      result = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  return result;
};

const UpdateFakeMeds = async (
  data1 = GetYesterday(),
  data2 = GetYesterday()
) => {
  console.log(`Update fake meds: ${data1} - ${data2}`);
  // try get data
  const requestedResult = await GetFakeMeds(data1, data2);

  // prepare data
  const convertedResult = ConvertFakeMeds(requestedResult.data);

  // save data
  const saveResult = await Promise.all(
    convertedResult.map(async item => {
      const newDoc = await FakeMed.findOneAndUpdate(
        {
          name: item.name,
          packaging: item.packaging,
          series: item.series,
          producer: item.producer
        },
        item,
        { upsert: true, new: true }
      );
      return newDoc;
    })
  );

  return saveResult;
};

module.exports = {
  errorMessage,
  checkField,
  UpdateFakeMeds
};
