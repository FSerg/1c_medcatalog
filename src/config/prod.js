module.exports = {
  port: process.env.PORT || 5002,
  jwtSecret: process.env.JWT_SECRET,
  token: process.env.TOKEN,
  mongoURI: process.env.MONGO_URI,
  resultsCounts: process.env.RESULTS_COUNTS || 20,
  urlLetter: process.env.URL_LETTER,
  urlAjax: process.env.URL_AJAX,
  cronSchedule: process.env.CRON_SCHEDULE || '0 1 * * *'
};
