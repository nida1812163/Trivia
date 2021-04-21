const Vehicle = require('../models/Vehicle.model');

exports.Vehicle_create=(req,res)=>{
    let Vehicle =new Vehicle({
        VehicleName:req.body.VehicleName,
        number:req.body.number
    });
    Vehicle.save((err)=>{
        if(err){
             return next(err)
        }
        res.redirect('/listV');
    });
}

// This function will load the INSER FORM, view to load
exports.Vehicle_formcreate=(req,res)=>{
    res.render('createformV', {page: 'New Vehicle', menuID:'createformV'})
}

exports.Vehicle_list=(req,res)=>{
    Vehicle.find((err, Vehicle)=>{ // (err, products) means that if an error is found then it is stored in 'err' [which is by default, a variable used in error handling] and if a product is found then it is stored in the 'product' array [we can write any array name]

        if(!err){
            res.render('listV', {page:'List Of All Vehicles', menuID:'listV', Vehicle:Vehicle}) //product array is also being passed   //controller is communicating with the view
        }
        else{
            console.log('Error in retrieving vehicle :'+JSON.stringify(err, undefined,2)); //stringify() means that object is to be converted into strings  // 'undefined' mneans that we are not highlighting any specific type of error  // '2' is linespacing
        }
    })
}   // Product.find() will fetch all the documents in the collection



// This function will call the updateform view
//  http://localhost:8080/products/:id/update
exports.Vehicle_updateform=(req, res)=>{    // updating the product
    Vehicle.findById(req.params.id,(err, Vehicle)=>{   //{$set: req.body} means that the user is providing the information that is to be updated
        if(err){                                                                  // In '$set', it will retrieve the new pieces of information, that are to be updated, from the req.body
            return next(err);
        }
        res.render('updateformV', {page :'Update Vehicle', menuID:'updateformV', Vehicle:Vehicle});
    })
}


//This function will perform UPDATE operation
exports.Vehicle_update=(req, res)=>{    // updating the product
    Vehicle.findByIdAndUpdate(req.params.id, {$set:req.body}, (err, vehicle)=>{   //{$set: req.body} means that the user is providing the information that is to be updated
        if(err){                                                                  // In '$set', it will retrieve the new pieces of information, that are to be updated, from the req.body
            return next(err);
        }
        res.redirect('/listV')
    })
}



//This function will perform the delete operation
//  http://localhost:8080/products/:id/delete
exports.Vehicle_delete=(req, res)=>{    // Deleting the product
    Vehicle.findByIdAndRemove(req.params.id, (err)=>{   
        if(err){                                        
            return next(err);
        }
        res.redirect('/listV')
    })
}
