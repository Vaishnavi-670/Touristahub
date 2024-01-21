const {Schema,model} = require('../connection');
const myschema = new Schema({
    name:String,
    location:{type:String},
    address:String,
    descripion:String,
    image:String
});

module.exports=model('place',myschema);