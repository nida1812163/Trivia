const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let SupplierSchema=new Schema({
    Name:{type:String,required:true,max:100},
    contact:{type:Number, required:true},
    address:{type: String, required: true, max: 100}
});

module.exports=mongoose.model('Supplier', SupplierSchema);