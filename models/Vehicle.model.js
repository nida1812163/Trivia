const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let VehicleSchema=new Schema({
    VehicleName:{type:String,required:true},
    number:{type:String, required:true}
});

module.exports=mongoose.model('Vehicle', VehicleSchema);