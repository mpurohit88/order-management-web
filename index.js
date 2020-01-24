const cron = require('cron');

const cronJob = cron.job("0 */1 * * * *", function () {

});


paymentReport.start();
cronJob.start();