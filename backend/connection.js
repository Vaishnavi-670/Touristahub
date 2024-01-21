const mongoose = require('mongoose');

const url = "mongodb+srv://Vaishnavi670:vaishu123@vaishnavi.trbpq3g.mongodb.net/touristahub?retryWrites=true&w=majority"

//asynchronous
mongoose.connect(url)
.then((result) => {
    console.log('connected to mongodb');
})
.catch((err) => {
    console.error(err);
});

//synchronous
console.log('some tSK 1 ');

//setTimeout use for set time limit means delay time fro exxecution 

//asynchronous
setTimeout( () => { console.log('delayed task')}, 2000)

//synchronous
console.log('some tSK 2');

module.exports=mongoose;