const express = require('express');

const UserRouter = require('./router/userRouter');
const PlaceRouter = require('./router/placeRouter');
const UtilRouter = require('./router/utils');

const cors = require('cors');

//initialize express 
const app = express();
const port = 5000;

//middleware
app.use(express.json());
app.use(cors({
    origin : 'http://localhost:5173'
}))
app.use('/user', UserRouter);
app.use('/place', PlaceRouter);
app.use('/util', UtilRouter);

app.use(express.static('./uploads'));

//creating a route
app.get('/', (req, res) => {
    res.send('Response from express;');
});

app.get('/add',(req,res) => {
    res.send('Add Response from server');
});

//getall
//update
//delete
app.get('/getall',(req,res) => {
    res.send('Get All Response from server');
});

app.get('/update',(req,res) => {
    res.send('Update Response from server');
});

app.get('/delete',(req,res) => {
    res.send('Delete Response from server');
});

//starting the server 
app.listen(port, () => {console.log('server started!!')});
