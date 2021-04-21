const Supplier=require('../models/Supplier.model');

//this function will perform the INSERT Operations
exports.supplier_create=(req,res)=>{
    let supplier=new Supplier({
        Name:req.body.Name,
        contact:req.body.contact,
        address: req.body.address
    });

    supplier.save((err)=>{
        if(err){
             return next(err)
        }
        res.redirect('/list');
    });
}

//this function will load the INSERT Form, View to load
exports.supplier_formcreate=(req,res)=>{
    res.render('createsupplier',{page:'New Supplier', menuId:'createsupplier'})
}

//This function loadds the view and finds all the documents in the product collections
exports.suppplier_list=(req,res)=>{
    Supplier.find((err,Supplier)=>{
        if(err){
            return next(err);
        }
        res.render('list',{page:'List Of All Supplier',menuId:'list',Supplier:Supplier});
    });
}

//this function will perform the delete operation
exports.supplier_delete=(req,res)=>{
    Supplier.findByIdAndRemove(req.params.id,(err)=>{
        if(err) return next(err);
        res.redirect('/list');
    });
}

//this function will call the updateform view
exports.supplier_updateform=(req,res)=>{
    Supplier.findById(req.params.id,(err,Supplier)=>{
        if(err) return next(err);
        res.render('supplierupdateform',{page:'Update Supplier',menuId:'supplierupdateform',Supplier:Supplier});
    })
}

//this function will perform the update operation
exports.supplier_update=(req,res)=>{
    Supplier.findByIdAndUpdate(req.params.id,{$set:req.body},(err,Supplier)=>{
        if(err) return next(err);
        res.redirect('/list');
    })
}

