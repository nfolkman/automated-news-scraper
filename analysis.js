const db = require('./data')
const { MONGO_URI } = db

const mongoose = require('mongoose')

mongoose.connect(MONGO_URI,{
   useNewUrlPArser: true})
   .then(()=> console.log('MongoDB Connected'))
   .catch(err => console.log(err))


   // pass data from scraper into model
   const resultAnalysisAndSave = dataObj => {
      try{
         const Articles = require('./models/Articles')
         const titleQuery = dataObj.title
            // a block-scope problem with dataObj? \/
         const updatingData = $set:{title:dataObj.title, summary:dataObj.summary, source:dataObj.source, date:dataObj.date}

         return Articles.findOneAndUpdate(titleQuery,updatingData, { upsert: true})


         // /*** HOW TO BUILD CONDITIONALS TO UPDATE/REPLACE ALL DOCUMENTS IN DB IF DOC COUNT IS GREATER THAN 0? ***/
         
         //    let cleanSlate = Articles.create(dataObj.data)

         //    // let update = Articles.findOneAndUpdate(dataObj.data)
         //    // let update = Articles.updateMany({}, { $set: {dataObj}}).save()
         //    // let update = Articles.replaceOne({}, {dataObj})

         //    if(!Articles.count()) return cleanSlate
         //     else return update

             

      }catch(err) {
         console.error(err)
      }
   }

   module.exports = resultAnalysisAndSave