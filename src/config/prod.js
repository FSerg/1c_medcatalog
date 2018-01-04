module.exports = {
  port: process.env.PORT || 5000,
  token: process.env.TOKEN,
  mongoURI: process.env.MONGO_URI,
  urlLetter: process.env.URL_LETTER,
  urlAjax: process.env.URL_AJAX,
  cronSchedule: process.env.URL_AJAX || '0 1 * * *'
};
