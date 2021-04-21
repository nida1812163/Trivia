// Including Model
const Employee = require('../models/employee.model')



//This function will perform the INSERT operation
//  http://localhost:8080/products/create
exports.employee_create=(req, res)=>{ 
    let employee = new Employee(   // This method is creating a product
        {                        // created the object 'product' that is coming from the model 'Product'
            Name: req.body.Name,
            contact: req.body.contact,
            age: req.body.age
        }
    );

    employee.save((err)=>{   // This method is going to commit the product to the database
        if(err){    // This is error handling
            return next(err);  // next means to move on to the next function
        }
        res.redirect('/listE') // Will take us to the list page
    });
}

// This function will load the INSER FORM, view to load
exports.employee_formcreate=(req,res)=>{
    res.render('createformE', {page: 'New Employee', menuID:'createformE'})
}


//This function loads the view and finds all the documents in the product collection
//  http://localhost:8080/products/:id
exports.employee_list=(req,res)=>{
    Employee.find((err, employee)=>{ // (err, products) means that if an error is found then it is stored in 'err' [which is by default, a variable used in error handling] and if a product is found then it is stored in the 'product' array [we can write any array name]

        if(!err){
            res.render('listE', {page:'List Of All Employees', menuID:'listE', employee:employee}) //product array is also being passed   //controller is communicating with the view
        }
        else{
            console.log('Error in retrieving employees list:'+JSON.stringify(err, undefined,2)); //stringify() means that object is to be converted into strings  // 'undefined' mneans that we are not highlighting any specific type of error  // '2' is linespacing
        }
    })
}   // Product.find() will fetch all the documents in the collection



// This function will call the updateform view
//  http://localhost:8080/products/:id/update
exports.employee_updateform=(req, res)=>{    // updating the product
    Employee.findById(req.params.id,(err, employee)=>{   //{$set: req.body} means that the user is providing the information that is to be updated
        if(err){                                                                  // In '$set', it will retrieve the new pieces of information, that are to be updated, from the req.body
            return next(err);
        }
        res.render('updateformE', {page :'Update Employee', menuID:'updateformE', employee:employee});
    })
}


//This function will perform UPDATE operation
exports.employee_update=(req, res)=>{    // updating the product
    Employee.findByIdAndUpdate(req.params.id, {$set:req.body}, (err, employee)=>{   //{$set: req.body} means that the user is providing the information that is to be updated
        if(err){                                                                  // In '$set', it will retrieve the new pieces of information, that are to be updated, from the req.body
            return next(err);
        }
        res.redirect('/listE')
    })
}



//This function will perform the delete operation
//  http://localhost:8080/products/:id/delete
exports.employee_delete=(req, res)=>{    // Deleting the product
    Employee.findByIdAndRemove(req.params.id, (err)=>{   
        if(err){                                        
            return next(err);
        }
        res.redirect('/listE')
    })
}