const moongose = require('mongoose');
const User = require ('../models/user');
const bcrypt = require('bcrypt');
const AuthMiddleware = {};

AuthMiddleware.isAuthentication = function(req,res,next){
    if(!req.session.user) res.redirect('/');
    else{
        if(!user) return res.redirect('/');
        else bcrypt.compare(data.user.Id,user._id.toString(),function(err,result){
            if(result =true) return next();
            else return(err);
        });
    }
}