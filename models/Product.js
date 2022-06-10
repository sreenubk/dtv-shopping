const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
   sku :{
       type : String,
       required : true,
       unique : true,
       trim : true,
       maxlength: 10
   },
   title:{
       type: String,
       required : true,
       maxlength : 20
   },
   description:{
    type: String,
    maxlength : 50
} 
});
module.exports = mongoose.model('Product',ProductSchema);