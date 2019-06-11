const express = require("express");
const vehicles = require('../controller/vehicles')
const router = express.Router()

router.get('/', (req, res) => {
  res.json(vehicles.list())
})
router.get('/:id', (req, res) => {
  res.json(vehicles.show(req.params.id))
})

router.post('/', (req, res) => {
  res.json(vehicles.add())
})

module.exports = router


// const express = require('express')
// const router = express.Router()

// const vehiclesController = require('../controller/vehicles')

// router.get('/vehicles', vehiclesController.list)

// router.get('/vehicles/:id', vehiclesController.show)

// router.post('/vehicles', vehiclesController.add)

// module.exports = router