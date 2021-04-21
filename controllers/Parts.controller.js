const Parts = require('../models/Parts.model');



//this function will perform the INSERT Operations
exports.parts_create=(req,res)=>{
    let Parts=new Parts({
        PartName:req.body.PartName
    });

    Parts.save((err)=>{
        if(err){
            return next(err);
        }
        res.redirect('/listP');
    });
}

//this function will load the INSERT Form, View to load
exports.parts_formcreate=(req,res)=>{
    res.render('createpart',{page:'New Parts', menuId:'createpart'})
}

//This function loadds the view and finds all the documents in the product collections
exports.parts_list=(req,res)=>{
    Parts.find((err,Parts)=>{
        if(err){
            return next(err);
        }
        res.render('listP',{page:'List Of All Parts',menuId:'listP',Parts:Parts});
    });
}

//this function will perform the delete operation
exports.parts_delete=(req,res)=>{
    Parts.findByIdAndRemove(req.params.id,(err)=>{
        if(err) return next(err);
        res.redirect('/listP');
    });
}

//this function will call the updateform view
exports.parts_updateform=(req,res)=>{
    Supplier.findById(req.params.id,(err,Supplier)=>{
        if(err) return next(err);
        res.render('partsupdateform',{page:'Update Parts',menuId:'partsupdateform',Supplier:Supplier});
    })
}

//this function will perform the update operation
exports.parts_update=(req,res)=>{
    Supplier.findByIdAndUpdate(req.params.id,{$set:req.body},(err,Supplier)=>{
        if(err) return next(err);
        res.redirect('/listP');
    })
}

