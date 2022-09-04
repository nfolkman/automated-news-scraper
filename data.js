require('dotenv').config()


MONGO_URI_Impacts = process.env.MONGO_URI_Impacts
MONGO_URI_Solutions = process.env.MONGO_URI_Solutions


module.exports = {MONGO_URI_Impacts,MONGO_URI_Solutions}