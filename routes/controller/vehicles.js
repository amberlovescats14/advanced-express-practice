const uuid = require('uuid')
const vehicles = require('../../data/vehicles')



const list = () => {
  return vehicles
}

const show = (id) => {
  const found = vehicles.some(vehicle => vehicle._id === parseInt(req.params.id))

  if(found){
    res.json(vehicles.filter(vehicle => vehicle._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({msg: `No vehicle with the id ${req.params.id}`})
  }
}

const add = () => {
  const newVehicle = {
    _id: uuid.v4(),
    name: req.body.name
  }

  if(!newVehicle.name ) {
   return res.status(400).json({msg: 'Please include name.'})
  }

  vehicles.push(newVehicle);
  return vehicles
}

module.exports = {
  list,
  show,
  add

}