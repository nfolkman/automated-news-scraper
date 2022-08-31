const db = require('./data')
const { MONGO_URI } = db

const mongoose = require('mongoose')

mongoose.connect(MONGO_URI,{
   useNewUrlPArser: true})
   .then(()=> console.log('MongoDB Connected'))
   .catch(err => console.log(err))


   // pass data from scraper into model
   const resultAnalysisAndSave = data => {
      try{
         const Articles = require('./models/Articles')
         const titleQuery = data.title
         
         const updatingData = {$set: { title:data.title, summary:data.summary, source:data.source, date:data.date} }

         
         // this does nothing ||  I want to replace/update ALL existing docs in DB
         //                   \/
         // return Articles.findOneAndUpdate(titleQuery,updatingData, { upsert: true})



         // this adds more documents to the DB, on top of the ones that are already there
         return Articles.create(data)


         // /*** HOW TO BUILD CONDITIONALS TO UPDATE/REPLACE ALL DOCUMENTS IN DB IF DOC COUNT IS GREATER THAN 0? ***/
         

             

      }catch(err) {
         console.error(err)
      }
   }

   module.exports = resultAnalysisAndSave