const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let PartsSchema=new Schema({
    Name:{type:String, required:true, max:100},
    
});

module.exports=mongoose.model('Parts', PartsSchema);