const db = require('./data')
const { MONGO_URI } = db

const mongoose = require('mongoose')

mongoose.connect(MONGO_URI,{
   useNewUrlParser: true})
   .then(()=> console.log('MongoDB Connected'))
   .catch(err => console.log(err))


   // pass data from scraper into model
   const resultAnalysisAndSave = data => {
      try{
         const Articles = require('./models/Articles')
         const titleQuery = {title:data.title}
         
         // const updatingData = {title:data.title, summary:data.summary, source:data.source, date:data.date}

         
         // this does nothing ||  I want to replace/update ALL existing docs in DB
         //                   \/
        return Articles.updateMany({},{title:data.title, summary:data.summary, source:data.source, date:data.date})



         // this adds more documents to the DB, on top of the ones that are already there
         // return Articles.create(data)


         // /*** HOW TO BUILD CONDITIONALS TO UPDATE/REPLACE ALL DOCUMENTS IN DB IF DOC COUNT IS GREATER THAN 0? ***/
         

             

      }catch(err) {
         console.error(err)
      }
   }

   module.exports = resultAnalysisAndSave