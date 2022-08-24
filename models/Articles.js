const mongoose = require('mongoose')
const Schema = mongoose.Schema


const articlesSchema = new Schema({
   title: {
      type: String
   },
   summary: {
      type: String
   },
   source: {
      type: String
   },
   date: {
      type: String
   }
})


module.exports = mongoose.model('Articles', articlesSchema)