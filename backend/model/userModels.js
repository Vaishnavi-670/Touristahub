const {Schema,model} = require('../connection');
const myschema = new Schema({
    email:String,
    name:String,
    location:{type:String,default: 'Not specified'},
    password:String

});

module.exports=model('user',myschema);