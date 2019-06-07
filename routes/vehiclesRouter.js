const express = require("express");
const vehicles = require('./controller/vehicles')
const router = express.Router()

router.get('/', (req, res) => {
  res.json(vehicles)
})
router.get('/:id', (req,res) => {
  res.json(vehicles)
})

router.post('/', (req, res) => {
  res.json(vehicles)
})

module.exports = router