const express = require('express');
const Model = require('../model/placeModel');

const router =express.Router();

router.post('/add' , (req,res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

//getall

router.get('/getall' , (req,res) => {
    Model.find()
    .then((result) => {
        res.json (result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
    // res.send('getall response from user Router');
});

//getbyLoacation
router.get('/getbylocation/:location',(req,res) => {
    console.log(req.params.location);
    Model.find({location : req.params.location})
  .then((result) => {
      res.json (result);
  }).catch((err) => {
      console.error(err);
      res.status(500).json(err);
  });
})

//getbyid

router.get('/getbyid/:id' , (req,res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.json (result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

//update

router.put('/update/:id' , (req,res) => {
    Model.findByIdAndUpdate( req.params.id,req.body)
  .then((result) => {
      res.json (result);
  }).catch((err) => {
      console.error(err);
      res.status(500).json(err);
  });
})


//delete

router.delete('/delete/:id' , (req,res) => {
    Model.findByIdAndDelete(req.params.id)
  .then((result) => {
      res.json (result);
  }).catch((err) => {
      console.error(err);
      res.status(500).json(err);
  });
});

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
    .then((result) => {
        if(result) res.json(result);
        else res.status(401).json({message : 'Invalid Credentials'});
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
  });
})

module.exports=router;
