const express = require("express");
const uuid = require('uuid')
const vehicles = require('../../data/vehicles')

const router = express.Router()


router.get('/', (req, res) => {
  res.json(vehicles)
})
router.get('/:id', (req,res) => {
  const found = vehicles.some(vehicle => vehicle._id === parseInt(req.params.id))

  if(found){
    res.json(vehicles.filter(vehicle => vehicle._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({msg: `No vehicle with the id ${req.params.id}`})
  }
})

router.post('/', (req, res) => {
  const newVehicle = {
    _id: uuid.v4(),
    name: req.body.name
  }

  if(!newVehicle.name ) {
   return res.status(400).json({msg: 'Please include name.'})
  }

  vehicles.push(newVehicle);
  res.json(vehicles)
})

module.exports = router