const resultAnalysisAndSave = require('./analysis')
const scraper = require('./scraper')

scraper()
.then(dataObj => {
   resultAnalysisAndSave(dataObj)
})
.catch(console.error())