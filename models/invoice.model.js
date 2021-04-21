const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let InvoiceSchema=new Schema({
    Bill:{type:String,required:true},
    NameOfProducts:{type:String, required:true},
    Date:{type:Date, required:true}
});

module.exports=mongoose.model('Invoice', InvoiceSchema);