const moongose = require('moongose');
const bcrcypt = require('bcrypt');
const {Schema} = mongoose;
const UserSchema = new Schema({
    email: {type:String, require:true, unique:true},
    password:{type:String,require:true}
});

UserSchema.statics.authenticate = function(email,password,callback){
    User.findOne({email:email})
    .exec(function(err,user){
        if(err) return callback(err);
        else if(!user){
            var err = new Error('user not found.');
            err.status = 401;
            return callback(err);
        }
        bcrcypt.compare(password,user.password,function(err,result){
            if(resul == true) return callback(null,user);
            else return callback(new Error('User or password are WRONG'));

        })
    })
};

UserSchema.pre('save',function(next){
    var user = this;
    bcrcypt.hash(user.password,10,function(err,hash){
        if(err) return next(err);
        user.password = hash;
        next();
    });
});

let User = moongose.model('users',UserSchema);
module.exports = User;