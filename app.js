const impactsAnalysis = require('./analysis')
const scraper = require('./scraper')
const cron = require('node-cron')


// cron job to automate? Unless chosen server has job scheduling options

scraper()
.then(data => {
   impactsAnalysis(data)
})
.catch(console.error())
