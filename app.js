const resultAnalysisAndSave = require('./analysis')
const scraper = require('./scraper')

scraper()
.then(data => {
   resultAnalysisAndSave(data)
})
.catch(console.error())