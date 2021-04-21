const Invoice = require('../models/invoice.model')




//This function will perform the INSERT operation
//  http://localhost:8080/products/create
exports.invoice_create=(req, res)=>{ 
    let invoice = new Invoice(   // This method is creating a product
        {                        // created the object 'product' that is coming from the model 'Product'
            Bill: req.body.Bill,
            NameOfProducts: req.body.NameOfProducts,
            Date: req.body.Date
        }
    );

    invoice.save((err)=>{   // This method is going to commit the product to the database
        if(err){    // This is error handling
            return next(err);  // next means to move on to the next function
        }
        res.redirect('/listI') // Will take us to the list page
    });
}

// This function will load the INSER FORM, view to load
exports.invoice_formcreate=(req,res)=>{
    res.render('createformI', {page: 'New Invoice', menuID:'createformI'})
}


//This function loads the view and finds all the documents in the product collection
//  http://localhost:8080/products/:id
exports.invoice_list=(req,res)=>{
    Invoice.find((err, invoice)=>{ // (err, products) means that if an error is found then it is stored in 'err' [which is by default, a variable used in error handling] and if a product is found then it is stored in the 'product' array [we can write any array name]

        if(!err){
            res.render('listI', {page:'List Of All Invoice', menuID:'listI', invoice:invoice}) //product array is also being passed   //controller is communicating with the view
        }
        else{
            console.log('Error in retrieving invoice :'+JSON.stringify(err, undefined,2)); //stringify() means that object is to be converted into strings  // 'undefined' mneans that we are not highlighting any specific type of error  // '2' is linespacing
        }
    })
}   // Product.find() will fetch all the documents in the collection



// This function will call the updateform view
//  http://localhost:8080/products/:id/update
exports.invoice_updateform=(req, res)=>{    // updating the product
    Invoice.findById(req.params.id,(err, invoice)=>{   //{$set: req.body} means that the user is providing the information that is to be updated
        if(err){                                                                  // In '$set', it will retrieve the new pieces of information, that are to be updated, from the req.body
            return next(err);
        }
        res.render('updateformI', {page :'Update Invoice', menuID:'updateformI', invoice:invoice});
    })
}


//This function will perform UPDATE operation
exports.invoice_update=(req, res)=>{    // updating the product
    Invoice.findByIdAndUpdate(req.params.id, {$set:req.body}, (err, invoice)=>{   //{$set: req.body} means that the user is providing the information that is to be updated
        if(err){                                                                  // In '$set', it will retrieve the new pieces of information, that are to be updated, from the req.body
            return next(err);
        }
        res.redirect('/listI')
    })
}



//This function will perform the delete operation
//  http://localhost:8080/products/:id/delete
exports.invoice_delete=(req, res)=>{    // Deleting the product
    Invoice.findByIdAndRemove(req.params.id, (err)=>{   
        if(err){                                        
            return next(err);
        }
        res.redirect('/lsitI')
    })
}
