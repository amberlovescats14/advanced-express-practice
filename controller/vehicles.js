const uuid = require('uuid')
const vehicles = require('../data/vehicles')



const list = () => {
  return vehicles
}

const show = (id) => {
  const found = vehicles.some(vehicle => vehicle._id === parseInt(id))

  if(found){
    return vehicles.filter(vehicle => vehicle._id === parseInt(id))
  } else {
    return {msg: "ID not found"}
  }
}

const add = () => {
  const newVehicle = {
    _id: uuid.v4(),
    name: req.body.name
  }

  if(!newVehicle.name ) {
   return {msg: 'Please include name.'}
  }

  vehicles.push(newVehicle);
  return vehicles
}

module.exports = {
  list,
  show,
  add

}