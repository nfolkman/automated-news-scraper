const data = require('./data')
const { MONGO_URI } = data

const mongoose = require('mongoose')

mongoose.connect(MONGO_URI,{
   useNewUrlPArser: true})
   .then(()=> console.log('MongoDB Connected'))
   .catch(err => console.log(err))


   // pass data from scraper into model
   const resultAnalysisAndSave = dataObj => {
      try{
         const Articles = require('./models/Articles')



         /*** HOW TO BUILD CONDITIONALS TO UPDATE/REPLACE ALL DOCUMENTS IN DB IF DOC COUNT IS GREATER THAN 0? ***/
         
            let cleanSlate = Articles.create(dataObj.data)

            let update = Articles.findOneAndUpdate(dataObj.data)

            if(!Articles.count()) return cleanSlate
             else return update

             

      }catch(err) {
         console.error(err)
      }
   }

   module.exports = resultAnalysisAndSave