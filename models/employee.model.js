const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let EmployeeSchema=new Schema({
    Name:{type:String,required:true},
    contact:{type:String, required:true},
    age:{type:String, required:true}
});

module.exports=mongoose.model('Employee', EmployeeSchema);