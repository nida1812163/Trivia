const Profile = require('../models/Profile.model');

//this function will call the updateform view
exports.profile_updateform=(req,res)=>{
    Profile.findById(req.params.id,(err,Profile)=>{
        if(err) return next(err);
        res.render('updateform',{page:'Update Profile',menuId:'updateform',Profile:Profile});
    })
}

//this function will perform the update operation
exports.profile_update=(req,res)=>{
    Profile.findByIdAndUpdate(req.params.id,{$set:req.body},(err,Profile)=>{
        if(err) return next(err);
        res.redirect('/');
    })
}