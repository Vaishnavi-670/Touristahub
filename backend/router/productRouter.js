const express = require('express');
const Model = require('../model/productModels');

const router =express.Router();

router.post('/add' , (req,res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
});

//getall

router.get('/getall' , (req,res) => {
    res.send('getall response from product Router');
});

//getbyid

router.get('/getbyid' , (req,res) => {
    res.send('getbyid response from product Router');
});

//update

router.get('/update' , (req,res) => {
    res.send('update response from product Router');
});

//delete

router.get('/delete' , (req,res) => {
    res.send('delete response from product Router');
});

module.exports=router;
