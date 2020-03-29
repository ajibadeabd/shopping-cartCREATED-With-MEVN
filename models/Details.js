const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetailsSchema = new Schema({
    
    
    number:{
            type:String
            },
   address:{
                type:String
                },
   postal_code:{
                type:String
                },
   country:{
                type:String
                },
  date:{
      type:Date,
      default:Date.now
  }
});

module.exports = mongoose.model('Details', DetailsSchema);