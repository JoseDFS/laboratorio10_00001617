const mmongose = require('moongose');
const {mongodb}= require ('./keys');

mmongose.connect(mongodb.URI,{
    userNewUrlParser:true,
    useCreateINdex: true
})
.then(db=>console.log('connection succes!'))
.catch(err=>console.log(err));